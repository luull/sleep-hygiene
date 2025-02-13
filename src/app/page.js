import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Sleep Hygiene</title>
        <meta name="description" content="Learn about the importance of sleep hygiene and how to improve your sleep quality." />
      </Head>

      <main className="flex flex-col items-center justify-center my-5 flex-1 px-4 text-center">
      <div className="w-full max-w-2xl mb-8">
          <Image
            src="/sleep.jpg" 
            alt="Sleep Hygiene"
            width={500} 
            height={200} 
            className="rounded-lg mx-auto"
          />
        </div>
        <h1 className="text-6xl font-bold text-blue-800">
          Sleep Hygiene
        </h1>

        <p className="mt-4 text-xl text-gray-700">
          Tips and strategies for better sleep
        </p>
        <hr/>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Link href="/concept" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700">Konsep Tidur &rarr;</h2>
            <p className="mt-2 text-gray-600">Pelajari pentingnya tidur dan kualitas tidur.</p>
          </Link>

          <Link href="/hygiene" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700">Sleep Hygiene &rarr;</h2>
            <p className="mt-2 text-gray-600">Temukan kebiasaan untuk meningkatkan kualitas tidur.</p>
          </Link>

          <Link href="/impact" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700">Dampak Tidur &rarr;</h2>
            <p className="mt-2 text-gray-600">Pahami dampak tidur terhadap konsentrasi belajar.</p>
          </Link>

          <Link href="/tips" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-700">Tips Praktis &rarr;</h2>
            <p className="mt-2 text-gray-600">Dapatkan tips untuk tidur yang lebih baik.</p>
          </Link>
        </div>
      </main>

      <footer className="w-full h-20 flex items-center justify-center border-t border-gray-200 bg-white">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Reza Muhammad Alghifari
        </a>
      </footer>
    </div>
  );
}