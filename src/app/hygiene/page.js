'use client'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Hygiene() {
  const [openIndex, setOpenIndex] = useState(null);

  const hygieneItems = [
    {
      title: "Menjaga Jadwal Tidur yang Konsisten",
      content: "Pergi tidur dan bangun pada waktu yang sama setiap hari, termasuk akhir pekan, untuk membantu mengatur ritme sirkadian tubuh."
    },
    {
      title: "Menciptakan Lingkungan Tidur yang Nyaman",
      content: "Pastikan kamar tidur tenang, gelap, dan memiliki suhu yang nyaman. Gunakan kasur dan bantal yang mendukung kenyamanan tidur."
    },
    {
      title: "Menghindari Kafein dan Nikotin",
      content: "Batasi konsumsi kafein dan nikotin, terutama menjelang waktu tidur, karena kedua zat ini dapat mengganggu kualitas tidur."
    },
    {
      title: "Membatasi Tidur Siang",
      content: "Jika perlu tidur siang, batasi durasinya hingga maksimal 30 menit dan hindari tidur siang menjelang sore hari."
    },
    {
      title: "Melakukan Aktivitas Relaksasi Sebelum Tidur",
      content: "Lakukan rutinitas yang menenangkan, seperti membaca buku, mendengarkan musik yang menenangkan, atau meditasi, untuk mempersiapkan tubuh dan pikiran menuju tidur."
    },
    {
      title: "Membatasi Paparan Layar Elektronik",
      content: "Hindari penggunaan perangkat elektronik seperti ponsel, tablet, atau komputer setidaknya satu jam sebelum tidur, karena cahaya biru dari layar dapat mengganggu produksi melatonin dan ritme tidur."
    },
    {
      title: "Mengatur Pola Makan dan Minum",
      content: "Hindari makan dalam porsi besar atau minum banyak cairan menjelang tidur untuk mencegah ketidaknyamanan dan sering terbangun di malam hari."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Sleep Hygiene - Sleep Hygiene</title>
        <meta name="description" content="Temukan kebiasaan untuk meningkatkan kualitas tidur." />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 py-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Sleep Hygiene
        </h1>

        <p className="mb-8 text-lg text-gray-700 text-left">
          Sleep hygiene adalah serangkaian praktik dan kebiasaan yang bertujuan untuk meningkatkan kualitas tidur. Berikut adalah beberapa langkah yang dapat diterapkan:
        </p>

        <div className="w-full space-y-2">
          {hygieneItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
              >
                <span className="font-medium text-left text-black">{item.title}</span>
                <svg
                  className={`w-5 h-5 transform text-black transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-40 py-3' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            &larr; Kembali ke Beranda
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