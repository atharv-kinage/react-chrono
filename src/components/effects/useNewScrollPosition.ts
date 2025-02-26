import { Scroll } from '@models/TimelineHorizontalModel';
import { TimelineMode } from '@models/TimelineModel';
import { useMemo, useState } from 'react';

/**
 * Hook to calculate the new scroll position based on the given mode and item width.
 *
 * @param {TimelineMode} mode - The mode of the timeline (HORIZONTAL, VERTICAL, or VERTICAL_ALTERNATING).
 * @param {number} [itemWidth] - Optional item width for horizontal mode.
 * @returns {[number, (e: HTMLElement, s: Partial<Scroll>) => void]} - The new offset and a function to compute the new offset.
 */
const useNewScrollPosition = (
  mode: TimelineMode,
  itemWidth?: number,
): [number, (e: HTMLElement, s: Partial<Scroll>) => void] => {
  // State to hold the new offset value
  const [newOffset, setNewOffset] = useState(0);

  // Memoized function to compute the new offset value
  const computeNewOffset = useMemo(
    () => (parent: HTMLElement, scroll: Partial<Scroll>) => {
      // Destructuring relevant properties from parent and scroll
      const { clientWidth, scrollLeft, scrollTop, clientHeight } = parent;
      const { pointOffset, pointWidth, contentHeight, contentOffset } = scroll;

      // Handling horizontal mode
      if (mode === 'HORIZONTAL' && itemWidth && pointWidth && pointOffset) {
        // Calculating right boundaries for container and circular element
        const contrRight = scrollLeft + clientWidth;
        const circRight = pointOffset + pointWidth;

        // Checking if the element is fully visible
        const isVisible = pointOffset >= scrollLeft && circRight <= contrRight;

        // Checking if the element is partially visible
        const isPartiallyVisible =
          (pointOffset < scrollLeft && circRight > scrollLeft) ||
          (circRight > contrRight && pointOffset < contrRight);

        // Calculating gaps from left and right
        const leftGap = pointOffset - scrollLeft;
        const rightGap = contrRight - pointOffset;

        // Setting offset based on visibility and gap conditions
        if (
          !(isVisible || isPartiallyVisible) ||
          (leftGap <= itemWidth && leftGap >= 0) ||
          (rightGap <= itemWidth && rightGap >= 0)
        ) {
          setNewOffset(pointOffset - itemWidth);
        }
      } else if (mode === 'VERTICAL' || mode === 'VERTICAL_ALTERNATING') {
        // Handling vertical modes
        if (contentOffset !== undefined && contentHeight) {
          const containerBottom = scrollTop + clientHeight;
          const elementBottom = contentOffset + contentHeight;

          const isFullyVisible = contentOffset >= scrollTop && elementBottom <= containerBottom;
          const isPartiallyVisible = (contentOffset < scrollTop && elementBottom > scrollTop) ||
            (elementBottom > containerBottom && contentOffset < containerBottom);

          if (!isFullyVisible) {
            let idealScroll = scrollTop;

            if (contentOffset < scrollTop) {
              // Element is above; align its start with the container's top
              idealScroll = contentOffset;
            } else if (elementBottom > containerBottom) {
              // Element is below; align its end with the container's bottom
              idealScroll = elementBottom - clientHeight;
            }

            // Center the element if it's significantly out of view
            const containerCenter = scrollTop + clientHeight / 2;
            const elementCenter = contentOffset + contentHeight / 2;
            const isFarFromCenter = Math.abs(elementCenter - containerCenter) > clientHeight / 4;

            if (isFarFromCenter) {
              idealScroll = elementCenter - clientHeight / 2;
            }
            // Clamp the scroll position to valid bounds
            const maxScroll = parent.scrollHeight - clientHeight;
            idealScroll = Math.max(0, Math.min(idealScroll, maxScroll));

            setNewOffset(idealScroll);
          }
        }
      }
    },
    [mode, itemWidth], // Dependencies for useMemo
  );

  // Returning the new offset and the function to compute it
  return [newOffset, computeNewOffset];
};

export default useNewScrollPosition;
