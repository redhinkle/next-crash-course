import React from 'react'
import Nav from './Nav'
import Header from './Header';
import styles from '../styles/Layout.module.css'

export const Layout = ({ children }) => {
    return (
        <Header>
            <Nav/>
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
            </div>
            </Header>
  );
};
