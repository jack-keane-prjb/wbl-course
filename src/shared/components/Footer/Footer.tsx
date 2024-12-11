import React from 'react';
import { Copyright } from '../Copyright';
import { FooterLinks } from '../FooterLinks';

interface IFooter {
  className?: string;
}

export function Footer({ className }: IFooter) {
  return (
    <footer>
      <FooterLinks />
      <Copyright />
    </footer>
  );
}
