'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from "framer-motion";
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Pustaka() {
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


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
  >
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Head>
        <title>Sleep Hygiene - Sleep Hygiene</title>
        <meta name="description" content="Temukan kebiasaan untuk meningkatkan kualitas tidur." />
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
      <main className="flex flex-col my-5 items-center justify-center flex-1 px-4 py-8 w-full max-w-4xl">
  <h1 className="text-4xl text-left md:text-center font-bold text-blue-800 dark:text-blue-400 mb-6">
    Daftar Pustaka
  </h1>

  <ul className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 text-left space-y-4">
    <li>
      Amelia, R., Harsa, R., & Siana, Y. (2022). Hubungan kualitas tidur terhadap prestasi akademik mahasiswa kedokteran Universitas Baiturrahmah. Maret, 28(1).
    </li>
    <li>
      Irawan, I., & Hasibuan, U. (2024). Pengaruh Kurang Tidur Terhadap Short Term Memory Pada Mahasiswa Kedokteran Universitas Malikussaleh. 9–10.
    </li>
    <li>
      Irish, L. A., Kline, C. E., Gunn, H. E., Buysse, D. J., & Hall, M. H. (2015). The role of sleep hygiene in promoting public health: A review of empirical evidence. In Sleep Medicine Reviews (Vol. 22, pp. 23–36). W.B. Saunders Ltd. <a href="https://doi.org/10.1016/j.smrv.2014.10.001" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">https://doi.org/10.1016/j.smrv.2014.10.001</a>
    </li>
    <li>
      Salikunna, N. A., Didik Astiawan, W., Handayani, F., & Ramadhan, M. Z. (2022). Hubungan antara kualitas tidur dengan tingkat konsentrasi pada mahasiswa. Healthy Tadulako Journal (Jurnal Kesehatan Tadulako), 8(3), 157–163.
    </li>
    <li>
      Sina, I., Kedokteran dan Kesehatan-Fakultas Kedokteran Universitas Islam Sumatera Utara, J., Penelitian, A., & Bisma Kuncara, D. (2021). Hubungan kualitas tidur terhadap indeks prestasi semester pada mahasiswa Fakultas Teknik Universitas Islam Sumatera Utara pada tahun 2020. 20.
    </li>
    <li>
      Takeda, N., & Maemura, K. (2011). Circadian clock and cardiovascular disease. Journal of Cardiology, 57(3), 249–256. <a href="https://doi.org/10.1016/j.jjcc.2011.02.006" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">https://doi.org/10.1016/j.jjcc.2011.02.006</a>
    </li>
    <li>
      Sleep hygiene: Simple practices for better rest by Jessica Solodar, Health Writer (Harvard)
    </li>
  </ul>

  <div className="mt-8">
    <Link href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500">
      &larr; Kembali ke Beranda
    </Link>
  </div>
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
