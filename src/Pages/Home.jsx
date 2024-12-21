import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useRef } from 'react';
import AOS from 'aos'; // Import AOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const featuresRef = useRef(null); // Ref for smooth scrolling

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  const handleScrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to features section
  };

  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-600 via-purple-500 text-white">
      <Navbar />
      {/* Section Hero */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <h1
          className="text-5xl font-bold mb-4 animate-fade-in"
          data-aos="fade-up"
        >
          Welcome to Emotion AI
        </h1>
        <p
          className="max-w-lg text-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Emotion AI is an advanced tool to analyze human emotions through text.
          Discover how it works and enhance your understanding of AI-driven
          insights.
        </p>
        <button
          onClick={handleScrollToFeatures}
          className="px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:scale-110 hover:bg-purple-400 transition-transform duration-300 animate-pulse"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Ayo Mulai
        </button>
        {/* Animated Scroll Down Indicator */}
        <div
          className="absolute bottom-10 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-white mb-2 animate-bounce">Scroll ke bawah</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-2xl text-white animate-bounce"
          />
        </div>
      </div>

      {/* Section Fitur */}
      <section
        ref={featuresRef}
        className="py-16 px-6 bg-white text-purple-800"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Fitur Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-purple-100 p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold mb-2">Analisis Emosi Akurat</h3>
            <p>
              Gunakan algoritma AI canggih untuk mendeteksi emosi dari teks dengan
              akurasi tinggi.
            </p>
          </div>
          <div
            className="bg-purple-100 p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold mb-2">User-Friendly</h3>
            <p>
              Desain sederhana dan mudah digunakan oleh siapa saja, tanpa memerlukan
              pengalaman teknis.
            </p>
          </div>
          <div
            className="bg-purple-100 p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold mb-2">Hasil Instan</h3>
            <p>
              Dapatkan hasil analisis hanya dalam hitungan detik dengan visualisasi
              yang menarik.
            </p>
          </div>
        </div>
      </section>

      {/* Section Testimonials */}
      <section
        className="py-16 px-6 bg-gradient-to-br from-purple-500 to-purple-700 text-white"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Ulasan Pengguna</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white text-purple-800 p-6 rounded-lg shadow-lg"
            data-aos="zoom-in"
          >
            <p className="mb-4 italic">
              "Emotion AI membantu saya memahami emosi pelanggan dengan lebih
              baik. Sangat berguna untuk bisnis saya!"
            </p>
            <span className="font-bold">- Hosea, Pemilik Bisnis</span>
          </div>
          <div
            className="bg-white text-purple-800 p-6 rounded-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="mb-4 italic">
              "Cepat, mudah digunakan, dan hasilnya sangat informatif. Saya sangat
              merekomendasikan Emotion AI."
            </p>
            <span className="font-bold">- Silitonga, Client</span>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section
        className="py-16 px-6 bg-white text-purple-800 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-4">Siap untuk Mencoba?</h2>
        <p className="mb-8">
          Mulai perjalanan Anda untuk memahami emosi lebih baik dengan Emotion AI!
        </p>
        <Link
          to="/motion-ai"
          className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:scale-110 hover:bg-purple-500 transition-transform duration-300"
        >
          Mulai Sekarang
        </Link>
      </section>
    </div>
  );
}

export default Home;
