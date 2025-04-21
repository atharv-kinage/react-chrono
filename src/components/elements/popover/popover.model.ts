import { Theme } from '@models/Theme';
import { ReactNode } from 'react';

export type PopOverModel = {
  $isMobile?: boolean;
  children: ReactNode | ReactNode[] | ((args: { closePopover: () => void }) => React.ReactNode);
  icon?: ReactNode;
  isDarkMode?: boolean;
  placeholder?: string;
  position: 'top' | 'bottom';
  theme?: Theme;
  width?: number;
};
