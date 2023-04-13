import React, { Children } from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = ({ children }) => {
     const x = 2
     return (
       
     <div>
       <h1 className={headerStyles.title}>
         <span>Web </span>News
             </h1>
             <p className={headerStyles.description}>Keep up to date with the latest news</p>
       {children}

     </div>
   );
 };

export default Header