import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Layout, { siteTitle} from '../../components/layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Scout Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      
        <div className={styles.center}>
          <p className={styles.description}>
            At Scout Design, we strive to bring you the unique solutions your
            business needs. Whether you need a basic website for getting your 
            business online, cutting edge tools for managing your business, or
            a full stack of business solutions, we have you covered. Take a look
            at our demos below to see what Scout Design can do for you!
          </p>
        </div>

        <div className={styles.grid}>
          <Link
            href="/demos/websites"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Websites <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about our approach to building
              unique business websites.
            </p>
          </Link>

          <Link
            href="/demos/buisiness_tools"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Business Tools <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about how Scout Design builds
              tools geared for your business.
            </p>
          </Link>

          <Link
            href="/demos/data_page"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Data <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about how Scout Design can leverage data_page
              to help your business succeed.
            </p>
          </Link>

          <Link
            href="/demos/ecommerce"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Ecommerce <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn how an e-commerce page can add a new revenue stream
              to your business.
            </p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
