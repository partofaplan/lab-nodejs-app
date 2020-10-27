import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>Resume</h1>
      <h2>Cloud & DevOps Engineer</h2>
      <br />
          <h3>Profile</h3>
          <p>Experienced and reliable IT professional with over six years of experience working in a wide-range of enterprises to ensure the optimal performance of their application systems using automation and cloud technologies. Adept in providing solutions to improve and enhance services within a devops framework. Bringing forth a growth mindset and seeking to find the best path forward for the users.</p>
          <br />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}           
