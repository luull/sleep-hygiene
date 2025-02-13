import Head from 'next/head';
import Link from 'next/link';

export default function Concept() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Konsep Tidur - Sleep Hygiene</title>
        <meta name="description" content="Pelajari pentingnya tidur dan kualitas tidur." />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800">
          Konsep Tidur dan Kualitas Tidur
        </h1>

        <p className="mt-4 text-lg text-gray-700 text-left">
          Tidur merupakan kondisi fisiologis yang penting bagi pemulihan tubuh, termasuk perbaikan sel, penguatan sistem imun, dan pengolahan memori (Irish et al., 2015). Kualitas tidur yang buruk dapat berdampak negatif pada fungsi kognitif, suasana hati, serta meningkatkan risiko gangguan kesehatan mental dan fisik.
        </p>

        <p className="mt-4 text-lg text-gray-700 text-left">
          Salah satu faktor utama yang mengatur pola tidur adalah ritme sirkadian, yaitu siklus biologis 24 jam yang mengontrol berbagai fungsi fisiologis, termasuk tidur dan bangun (Takeda & Maemura, 2011). Ritme ini dikendalikan oleh nukleus suprachiasmaticus (SCN) di otak, yang berfungsi sebagai "jam biologis utama" dan sangat dipengaruhi oleh paparan cahaya.
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