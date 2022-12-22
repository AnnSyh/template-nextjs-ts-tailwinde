import Head from "next/head";
import Link from "next/link";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, home, title = "Ann's blog" }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <Navbar />
        <main className="flex w-full flex-1 flex-col items-center justify-top px-20 ">
          <h1 className="page-title">Page Title</h1>
          {children}
        </main>

        <div className="">
          <Link href="/">← Back to home</Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
