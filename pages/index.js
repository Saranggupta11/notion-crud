import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Client } from '@notionhq/client'

export default function Home({project}) {
  console.log(project)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {
            project.map(item=>(
              <a key={item.id}>
                {item.id}
              </a>
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const notion=new Client({
    auth:process.env.NOTION_API_KEY,
  })
  const res=await notion.databases.query({
    database_id:process.env.NOTION_DB,
  })
  console.log(res.results)
  return{
    props:{
      project:res.results
    }
  }
}