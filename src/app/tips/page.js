'use client'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Tips() {
  const [openIndex, setOpenIndex] = useState(null);

  const tipsItems = [
    {
      title: "Jadwal Tidur Konsisten",
      content: "Jaga jadwal tidur yang konsisten setiap hari. Tidur dan bangun di waktu yang sama membantu mengatur ritme tubuh alami Anda."
    },
    {
      title: "Lingkungan Tidur Nyaman",
      content: "Ciptakan lingkungan tidur yang nyaman dengan pencahayaan redup dan suhu yang sejuk. Pastikan kamar tidur Anda tenang dan menggunakan peralatan tidur yang nyaman."
    },
    {
      title: "Hindari Kafein dan Alkohol",
      content: "Hindari kafein dan alkohol sebelum tidur. Kedua zat ini dapat mengganggu kualitas tidur Anda dan menyebabkan tidur yang tidak nyenyak."
    },
    {
      title: "Batasi Penggunaan Gadget",
      content: "Batasi penggunaan gadget sebelum tidur untuk mengurangi paparan cahaya biru. Cahaya dari layar elektronik dapat mengganggu produksi hormon tidur alami tubuh."
    },
    {
      title: "Lakukan Relaksasi",
      content: "Lakukan relaksasi seperti meditasi atau membaca buku sebelum tidur. Kegiatan menenangkan membantu menyiapkan tubuh dan pikiran untuk tidur."
    }
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Tips Praktis - Sleep Hygiene</title>
        <meta name="description" content="Dapatkan tips untuk tidur yang lebih baik." />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 py-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Tips Praktis untuk Tidur yang Lebih Baik
        </h1>

        <div className="w-full space-y-3">
          {tipsItems.map((item, index) => (
            <div key={index} className="w-full bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full px-4 py-3 flex justify-between items-center bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-left text-gray-700">{item.title}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
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
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 text-gray-600 text-left border-t border-gray-100">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

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