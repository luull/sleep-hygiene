'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
      content: "Gunakan lampu tidur redup atau blackout curtain agar suasana lebih gelap.",
      image: "/tips/7.jpg"
    },
    {
      title: "Atur Suhu Ruangan",
      content: "Suhu ideal untuk tidur berkisar 18–22°C. Gunakan kipas atau AC jika diperlukan.",
      image: "/tips/8.jpg"
    },
    {
      title: "Kurangi Kebisingan",
      content: "Gunakan white noise atau penyumbat telinga jika lingkungan sekitar terlalu bising.",
      image: "/tips/9.jpg"
    },
    {
      title: "Pilih Kasur dan Bantal yang Nyaman",
      content: "Pastikan kasur tidak terlalu keras atau terlalu lembut untuk mendukung postur tubuh.",
      image: "/tips/10.jpg"
    },
    {
      title: "Jauhkan Perangkat Elektronik",
      content: "Hindari paparan cahaya biru dari ponsel atau laptop minimal 30 menit sebelum tidur.",
      image: "/tips/11.jpg"
    },
    {
      title: "Menjaga Jadwal Tidur yang Konsisten",
      content: "Pergi tidur dan bangun pada waktu yang sama setiap hari.",
      image: "/tips/1.jpg"
    },
    {
      title: "Menciptakan Lingkungan Tidur yang Nyaman",
      content: "Pastikan kamar tidur tenang, gelap, dan memiliki suhu yang nyaman.",
      image: "/tips/2.jpg"
    },
    {
      title: "Menghindari Kafein dan Nikotin",
      content: "Batasi konsumsi kafein dan nikotin, terutama menjelang waktu tidur.",
      image: "/tips/3.jpg"
    },
    {
      title: "Membatasi Tidur Siang",
      content: "Jika perlu tidur siang, batasi durasinya hingga maksimal 30 menit.",
      image: "/tips/4.jpg"
    },
    {
      title: "Melakukan Aktivitas Relaksasi Sebelum Tidur",
      content: "Lakukan rutinitas yang menenangkan sebelum tidur.",
      image: "/tips/5.png"
    },
    {
      title: "Membatasi Paparan Layar Elektronik",
      content: "Hindari penggunaan perangkat elektronik setidaknya satu jam sebelum tidur.",
      image: "/tips/5.jpg"
    },
    {
      title: "Mengatur Pola Makan dan Minum",
      content: "Hindari makan dalam porsi besar atau minum banyak cairan menjelang tidur.",
      image: "/tips/6.jpeg"
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
  >
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Tips Praktis - Sleep Hygiene</title>
        <meta name="description" content="Dapatkan tips untuk tidur yang lebih baik." />
      </Head>

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

      <main className="flex flex-col my-5 items-center justify-center flex-1 px-4 py-8 w-full max-w-4xl">
        <h1 className="text-4xl text-left md:text-center font-bold text-blue-800 dark:text-blue-400 mb-6">
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
                  openIndex === index ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 text-gray-600 dark:text-gray-400 text-left border-t border-gray-100 dark:border-gray-700">
                  <p>{item.content}</p>
                    <br/>
                      <Image
                          src={item.image}
                          alt={item.title}
                          layout="responsive"
                          width={800}
                          height={450}
                          objectFit="cover"
                          className="rounded-lg"
                        />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/" className="mt-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          &larr; Kembali ke Beranda
        </Link>
      </main>

      <footer className="w-full flex items-center justify-center border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 py-6 text-center">
    <p className="text-gray-600 dark:text-gray-400">© 2025 Reza Muhammad Alghifari</p>
    <div className="flex justify-center space-x-6 mt-2">
      <a
        href="https://wa.me/6285846638235"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-green-500 flex items-center space-x-2"
      >
        <FaWhatsapp size={20} />
        <span>085846638235</span>
      </a>
      <a
        href="https://instagram.com/rrezalghifari"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-pink-500 flex items-center space-x-2"
      >
        <FaInstagram size={20} />
        <span>@rrezalghifari</span>
      </a>
    </div>
  </div>
</footer>
    </div>
    </motion.div>
  );
}
