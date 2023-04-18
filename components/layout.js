import styles from './layout.module.css';
import SiteNavbar from './navbar';
import Footer from './footer';

const name = 'Bringing Your Business to the Web';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.header}>
        <SiteNavbar/>
      </div>
      {children}
    <Footer/>
    </>
       );
}