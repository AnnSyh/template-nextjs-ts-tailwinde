import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from '../companents/Navbar';
import Footer from '../companents/Footer';

const name = "Ann";



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Navbar />
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

          <header className='flex flex-col items-center'>
            <Image
              priority
              src="/images/profile.jpg"
              className='rounded-full'
              height={144}
              width={144}
              alt=""
            />
            <h1 className="text-6xl font-bold">{name}</h1>
          </header>

          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <Link
              href="/postsstatic"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Static pages &rarr;</h3>
              <p className="mt-4 text-xl">
                Запросы к статическим страницам
              </p>
            </Link>

            <Link
              href="/contacts"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Contacts &rarr;</h3>
              <p className="mt-4 text-xl">
                Многочисленные контакты
              </p>
            </Link>

            <Link
              href="/posts"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Blog &rarr;</h3>
              <p className="mt-4 text-xl">
                Здесь находятся посты на всякие интересные темы
              </p>
            </Link>

            <Link
              href="/"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Empty &rarr;</h3>
              <p className="mt-4 text-xl">
                Зато есть место для расширения
              </p>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Home
