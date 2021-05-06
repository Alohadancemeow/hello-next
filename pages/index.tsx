import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Index Page</h1>
    </div>
  )
}

// # Called in server-side
Home.getInitialProps = ({res, err}) => {
  res.writeHead(301, {Location: '/login'})
  res.end()
  return {}
}
