'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
import Link from 'next/link';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

export default function Concept() {
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

  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
  >
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>Konsep Tidur - Sleep Hygiene</title>
        <meta name="description" content="Pelajari pentingnya tidur dan kualitas tidur." />
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

      <main className="flex flex-col my-5 items-center justify-center flex-1 px-4 text-center max-w-4xl">
        <h1 className="text-4xl mb-5 text-left md:text-center font-bold text-blue-800 dark:text-blue-300">
          Konsep Tidur dan Kualitas Tidur
        </h1>
                    <Image
                                          src={'/tips/17.jpg'}
                                          alt={"sleep-hygiene"}
                                          layout="responsive"
                                          width={500}
                                          height={350}
                                          objectFit="cover"
                                          className="rounded-lg"
                                        />

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-400 text-left">
          Tidur merupakan kondisi fisiologis yang penting bagi pemulihan tubuh, termasuk perbaikan sel, penguatan sistem imun, dan pengolahan memori (Irish et al., 2015). Kualitas tidur yang buruk dapat berdampak negatif pada fungsi kognitif, suasana hati, serta meningkatkan risiko gangguan kesehatan mental dan fisik.
        </p>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-400 text-left">
          Salah satu faktor utama yang mengatur pola tidur adalah ritme sirkadian, yaitu siklus biologis 24 jam yang mengontrol berbagai fungsi fisiologis, termasuk tidur dan bangun (Takeda & Maemura, 2011). Ritme ini dikendalikan oleh nukleus suprachiasmaticus (SCN) di otak, yang berfungsi sebagai "jam biologis utama" dan sangat dipengaruhi oleh paparan cahaya.
        </p>

        <Link href="/" className="mt-8 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
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
