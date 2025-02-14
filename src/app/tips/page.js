'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function Tips() {
  const [openIndex, setOpenIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Cek tema dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Update tema saat state darkMode berubah
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const tipsItems = [
    {
      title: "Kurangi Cahaya Berlebih",
      content: "Gunakan lampu tidur redup atau blackout curtain agar suasana lebih gelap."
    },
    {
      title: "Atur Suhu Ruangan",
      content: "Suhu ideal untuk tidur berkisar 18–22°C. Gunakan kipas atau AC jika diperlukan."
    },
    {
      title: "Kurangi Kebisingan",
      content: "Gunakan white noise atau penyumbat telinga jika lingkungan sekitar terlalu bising."
    },
    {
      title: "Pilih Kasur dan Bantal yang Nyaman",
      content: "Pastikan kasur tidak terlalu keras atau terlalu lembut untuk mendukung postur tubuh."
    },
    {
      title: "Jauhkan Perangkat Elektronik",
      content: "Hindari paparan cahaya biru dari ponsel atau laptop minimal 30 menit sebelum tidur."
    },
    {
      title: 'Jadwal Tidur Konsisten',
      content:
        'Jaga jadwal tidur yang konsisten setiap hari. Tidur dan bangun di waktu yang sama membantu mengatur ritme tubuh alami Anda.',
    },
    {
      title: 'Lingkungan Tidur Nyaman',
      content:
        'Ciptakan lingkungan tidur yang nyaman dengan pencahayaan redup dan suhu yang sejuk. Pastikan kamar tidur Anda tenang dan menggunakan peralatan tidur yang nyaman.',
    },
    {
      title: 'Hindari Kafein dan Alkohol',
      content:
        'Hindari kafein dan alkohol sebelum tidur. Kedua zat ini dapat mengganggu kualitas tidur Anda dan menyebabkan tidur yang tidak nyenyak.',
    },
    {
      title: 'Batasi Penggunaan Gadget',
      content:
        'Batasi penggunaan gadget sebelum tidur untuk mengurangi paparan cahaya biru. Cahaya dari layar elektronik dapat mengganggu produksi hormon tidur alami tubuh.',
    },
    {
      title: 'Lakukan Relaksasi',
      content:
        'Lakukan relaksasi seperti meditasi atau membaca buku sebelum tidur. Kegiatan menenangkan membantu menyiapkan tubuh dan pikiran untuk tidur.',
    },

  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Tips Praktis - Sleep Hygiene</title>
        <meta name="description" content="Dapatkan tips untuk tidur yang lebih baik." />
      </Head>
         {/* Tombol Toggle Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-800"
      >
        {darkMode ? (
          <MdOutlineLightMode className="text-yellow-400" />
        ) : (
          <MdDarkMode className="text-gray-800" />
        )}
      </button>
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-400 mb-6">
          Tips Praktis untuk Tidur lebih berkualitas
        </h1>

    

        <div className="w-full space-y-3">
          {tipsItems.map((item, index) => (
            <div key={index} className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <button
                onClick={() => toggleDropdown(index)}
                aria-expanded={openIndex === index}
                aria-controls={`content-${index}`}
                className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="font-medium text-left text-gray-700 dark:text-gray-300">
                  {item.title}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${
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
                id={`content-${index}`}
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 text-gray-600 dark:text-gray-400 text-left border-t border-gray-100 dark:border-gray-700">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/" className="mt-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          &larr; Kembali ke Beranda
        </Link>
      </main>

      <footer className="w-full h-20 flex items-center justify-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Reza Muhammad Alghifari
        </a>
      </footer>
    </div>
  );
}
