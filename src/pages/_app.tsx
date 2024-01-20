import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/Head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Leetclone</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel= 'icon' href='/favicon.png'/>
          <meta name= 'description' content = 'This is a Data Structures and Algorithms(DSA) practice web site where users can practice dsa questions for interviews'/>  
      </Head>
      <Component {...pageProps} />
    </>
  ); 
}
