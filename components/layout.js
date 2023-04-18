import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '..//src/styles/utils.module.css';
import Link from 'next/link';
import logo from '../src/images/logo.jpg'
import SiteNavbar from './navbar';

const name = 'Bringing Your Business to the Web';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.header}>
        <SiteNavbar/>
      </div>
      {children}
    //add footer here
    </>
       );
}