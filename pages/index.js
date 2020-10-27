import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Zach Perkins' Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my portfolio website! I'm glad you came!</p>
        <p>
        Learn more about who I am <a href="/posts/portfolio">inside</a>!
        </p>
      </section>
    </Layout>
  )
}
