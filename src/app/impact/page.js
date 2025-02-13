import Head from 'next/head';
import Link from 'next/link';

export default function Impact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Dampak Tidur - Sleep Hygiene</title>
        <meta name="description" content="Pahami dampak tidur terhadap konsentrasi belajar." />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800">
          Dampak Tidur terhadap Konsentrasi Belajar
        </h1>

        <p className="mt-4 text-lg text-gray-700 text-left">
          Kualitas tidur yang baik berkontribusi terhadap optimalisasi proses belajar. Tidur yang cukup membantu konsolidasi memori dan meningkatkan fokus. Sebaliknya, kurang tidur dapat menyebabkan kesulitan berkonsentrasi, menurunkan daya serap informasi, serta berdampak negatif pada performa akademik mahasiswa (Salikunna et al., 2022).
        </p>

        <Link href="/" className="mt-8 text-blue-600 hover:text-blue-800">
          &larr; Kembali ke Beranda
        </Link>
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