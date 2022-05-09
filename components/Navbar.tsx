

import React from 'react'
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    // esto busca la unidad computada de menu-container
    <nav className={styles['menu-container']}> 
      {
        menuItems.map(({text, href}) => (
          <ActiveLink text={text} href={href} key={text} />
        ))
      }
    </nav>
  )
}







