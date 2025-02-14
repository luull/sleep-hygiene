'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Impact() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

const toggleDropdown = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Dampak Tidur - Sleep Hygiene</title>
        <meta name="description" content="Pahami dampak tidur terhadap konsentrasi belajar." />
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

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-400">
          Dampak Tidur terhadap Konsentrasi Belajar
        </h1>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-left">
          Kualitas tidur yang baik berkontribusi terhadap optimalisasi proses belajar. Tidur yang cukup membantu konsolidasi memori dan meningkatkan fokus. Sebaliknya, kurang tidur dapat menyebabkan kesulitan berkonsentrasi, menurunkan daya serap informasi, serta berdampak negatif pada performa akademik mahasiswa (Salikunna et al., 2022).
        </p>
        <div className="w-full space-y-3 mt-6">
  <h2 className="text-lg  text-left text-gray-800 dark:text-gray-800">Dampak Negatif Kurang Tidur : </h2>
  {[
    {
      title: 'Menurunkan konsentrasi dan daya ingat',
      content: 'Studi menunjukkan bahwa kurang tidur dapat mengurangi fungsi kognitif hingga 30% (Walker, 2017).'
    },
    {
      title: 'Meningkatkan risiko penyakit kronis',
      content: 'Gangguan tidur jangka panjang berhubungan dengan peningkatan risiko diabetes dan tekanan darah tinggi (Cappuccio et al., 2010).'
    },
    {
      title: 'Mengganggu keseimbangan emosional',
      content: 'Kurang tidur dikaitkan dengan peningkatan kecemasan dan depresi (Baglioni et al., 2011).'
    }
  ].map((item, index) => (
    <div key={index} className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <button
        onClick={() => toggleDropdown(index)}
        aria-expanded={openIndex === index}
        aria-controls={`content-negative-${index}`}
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
        id={`content-negative-${index}`}
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


        <Link
          href="/"
          className="mt-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
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
