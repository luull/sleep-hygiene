'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdOutlineLightMode, MdDarkMode, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { LuMessageSquareWarning } from "react-icons/lu";
import { GiNightSleep } from "react-icons/gi";
import { LuBookMarked } from "react-icons/lu";
import { BiSleepy } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Memeriksa preferensi tema dari localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Simpan preferensi tema di localStorage
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
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -50, opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Sleep Hygiene</title>
        <meta name="description" content="Learn about the importance of sleep hygiene and how to improve your sleep quality." />
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

      <main className="flex flex-col items-center justify-center my-10 flex-1 px-4 text-center">
        <div className="w-full max-w-2xl mb-8">
          <Image
            src="/sleep.jpg"
            alt="Sleep Hygiene"
            width={500}
            height={200}
            className="rounded-lg mx-auto"
          />
        </div>
        <h1 className="text-6xl font-bold text-blue-800 dark:text-blue-300">
          Sleep Hygiene
        </h1>

        <p className="mt-4 text-xl text-gray-700 dark:text-gray-400">
          Tips and strategies for better sleep
        </p>
        <hr className="border-gray-300 dark:border-gray-600" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        <Link href="/concept" className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-visible">
          <div className="absolute -top-8 -left-2 md:-top-8 md:-left-8">
            <GiNightSleep className="w-20 h-20 text-blue-700 dark:text-blue-300" />
          </div>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Konsep Tidur &rarr;</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Pelajari pentingnya tidur dan kualitas tidur.</p>
        </Link>
        <Link href="/hygiene" className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-visible">
          <div className="absolute -top-8 -right-2 md:-top-8 md:-right-8">
            <BiSleepy className="w-20 h-20 text-blue-700 dark:text-blue-300" />
          </div>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Sleep Hygiene &rarr;</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Temukan kebiasaan untuk meningkatkan kualitas tidur.</p>
        </Link>

          <Link href="/impact" className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-visible">
          <div className="absolute -top-8 -left-2 md:-top-8 md:-left-10">
            <LuMessageSquareWarning className="w-20 h-20 text-blue-700 dark:text-blue-300" />
          </div>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Dampak &rarr;</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Pahami dampak tidur terhadap konsentrasi belajar dan dampak negatif.</p>
        </Link>
          <Link href="/tips" className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-visible">
          <div className="absolute -top-8 -right-2 md:-top-8 md:-right-10">
            <MdOutlineTipsAndUpdates className="w-20 h-20 text-blue-700 dark:text-blue-300" />
          </div>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Tips Praktis &rarr;</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Dapatkan tips untuk tidur yang lebih baik dan berkualitas.</p>
        </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 max-w-4xl">
        <Link href="/pustaka" className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-visible">
          <div className="absolute -top-8 -left-2 md:-top-8 md:-left-8">
            
          </div>
          <h2 className="text-2xl space-x-3 flex flex-row items-center font-semibold text-blue-700 dark:text-blue-300"><LuBookMarked className="w-6 h-6 text-blue-700 dark:text-blue-300" />Daftar Pustaka </h2>
          {/* <p className="mt-2 text-gray-600 dark:text-gray-400">Pelajari pentingnya tidur dan kualitas tidur.</p> */}
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
