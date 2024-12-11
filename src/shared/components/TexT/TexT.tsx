import classNames from 'classnames';
import React from 'react';
import styles from './text.css';

export type TSizes = 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 48 | 64 | 150;

export enum EColors {
  white = 'white',
  grayF6 = 'grayF6',
  grayEA = 'grayEA',
  gray999 = 'gray999',
  gray666 = 'gray666',
  gray333 = 'gray333',
  black = 'black',
  straw = 'straw',
  purpleEBD = 'purpleEBD',
  purpleC99 = 'purpleC99',
  purpleA65 = 'purpleA65',
  purple703 = 'purple703',
  orangeFFF = 'orangeFFF',
  orangeFF8 = 'orangeFF8',
  orangeFFB = 'orangeFFB',
  orangeBB3 = 'orangeBB3',
}

export interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
  className?: string;
}

export function TexT(props: ITextProps) {
  const {
    As = 'span',
    children,
    size = 16,
    color = EColors.black,
    bold = false,
    className,
  } = props;

  const classes = classNames(styles[`s${size}`], styles[color], {
    [styles.bold]: bold,
  });

  return <As className={`${className} ${classes}`}>{children}</As>;
}
