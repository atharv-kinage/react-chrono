import { Theme } from '@models/Theme';
import { TextDensity, TimelineProps } from '@models/TimelineModel';
type ContentT = Pick<TimelineProps, 'theme' | 'slideShow' | 'mode' | 'borderLessCards'>;
export declare const TimelineItemContentWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {
    $active?: boolean;
    $borderLessCards?: TimelineProps["borderLessCards"];
    $branchDir?: string;
    $customContent?: boolean;
    $highlight?: boolean;
    $isNested?: boolean;
    $maxWidth?: number;
    $minHeight?: number;
    $noMedia?: boolean;
    $slideShow?: TimelineProps["slideShow"];
    $slideShowActive?: boolean;
    $slideShowType?: TimelineProps["slideShowType"];
    $textDensity?: TextDensity;
    $textOverlay?: boolean;
} & ContentT>> & string;
export declare const TimelineCardHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
export declare const CardSubTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $fontSize?: string;
    $padding?: boolean;
    dir?: string;
    theme?: Theme;
}>> & string;
export declare const CardTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $fontSize: string;
    $padding?: boolean;
    dir?: string;
    theme: Theme;
}>> & string;
export declare const CardTitleAnchor: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>> & string;
export declare const TimelineContentDetails: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {
    theme?: Theme;
}>> & string;
export declare const TimelineSubContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    fontSize?: string;
    theme?: Theme;
}>> & string;
export declare const TimelineContentDetailsWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $borderLess?: boolean;
    $cardHeight?: number | null;
    $contentHeight?: number;
    $customContent?: boolean;
    $gradientColor?: string | null;
    $showMore?: boolean;
    $textOverlay?: boolean;
    $useReadMore?: boolean;
    branchDir?: string;
    height?: number;
    theme?: Theme;
}>> & string;
export declare const ShowMore: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    show?: "true" | "false";
    theme?: Theme;
}>> & string;
export declare const SlideShowProgressBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, {
    $color?: string;
    $duration?: number;
    $paused?: boolean;
    $resuming?: boolean;
    $startWidth?: number;
}>> & string;
export declare const ChevronIconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    collapsed?: "true" | "false";
}>> & string;
export declare const TriangleIconWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    dir?: string;
    offset?: number;
    theme?: Theme;
}>> & string;
export {};
