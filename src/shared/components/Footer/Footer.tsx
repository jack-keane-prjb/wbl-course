import React from 'react';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { SocialLink } from '../SocialLink';
import styles from './footer.css';
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
