import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useRef } from 'react';
import AOS from 'aos'; // Import AOS

function AboutUs() {
  const featuresRef = useRef(null); // Ref untuk menargetkan bagian yang ingin discroll

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS dengan durasi animasi
  }, []);

  // Fungsi untuk scroll perlahan ke section yang diinginkan
  const handleScrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-600 via-purple-500 text-white">
      <Navbar />

      {/* Section Hero */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative py-24" data-aos="fade-up">
        <h1 className="text-6xl font-extrabold mb-6 text-white animate-fade-in">Tentang Emotion AI</h1>
        <p className="max-w-3xl text-xl mb-10 px-6 animate-fade-in" data-aos="fade-up" data-aos-delay="200">
          Emotion AI adalah alat canggih yang dapat menganalisis emosi manusia dari teks dengan teknologi AI terkini. Temukan bagaimana Emotion AI dapat memberikan wawasan baru tentang emosi dan sentimen dalam teks Anda.
        </p>
        <button
          onClick={handleScrollToFeatures} // Menambahkan scroll saat tombol diklik
          className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 hover:bg-purple-400 transition-transform duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Lebih lanjut
        </button>
      </div>

      {/* Section Cara Kerja */}
      <section
        ref={featuresRef} // Menandakan bagian yang akan discroll ke sini
        className="py-16 px-6 bg-white text-purple-800"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-semibold text-center mb-12">Bagaimana Emotion AI Bekerja</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-lg">
            <h3 className="text-2xl font-semibold mb-4">Analisis Emosi Teks</h3>
            <p className="text-center">
              Emotion AI menggunakan teknologi pemrosesan bahasa alami (NLP) untuk mengidentifikasi emosi dalam teks dengan tingkat akurasi tinggi. Algoritma ini memindai kata-kata dan konteks dalam kalimat untuk menganalisis perasaan yang mendasarinya.
            </p>
          </div>
          <div className="flex flex-col items-center text-lg">
            <h3 className="text-2xl font-semibold mb-4">Hasil Instan & Akurat</h3>
            <p className="text-center">
              Dengan Emotion AI, Anda akan mendapatkan analisis dalam hitungan detik. Teknologi ini memberikan gambaran jelas tentang emosi yang ada dalam teks untuk membantu Anda membuat keputusan yang lebih informasional.
            </p>
          </div>
        </div>
      </section>

      {/* Section Meet the Developers */}
      <section className="py-16 px-6 bg-white text-purple-800" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-center mb-12">Kenali Developer</h2>
        <div className="flex flex-col items-center md:flex-row justify-center gap-16">
          {/* Developer 1 */}
          <div className="flex flex-col items-center text-center max-w-xs mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/150"
              alt="Akmal Farizky"
              className="rounded-full mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">Akmal Farizky Hardhana</h3>
            <p className="text-lg mb-4">
              Akmal adalah pengembang utama yang merancang dan mengimplementasikan algoritma analisis emosi kami. Dengan latar belakang kuat di bidang teknologi AI, ia berfokus pada menciptakan solusi cerdas dan inovatif.
            </p>
          </div>
          {/* Developer 2 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img
              src="https://via.placeholder.com/150"
              alt="Lauser Kumala Dewa"
              className="rounded-full mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">Lauser Kumala Dewa</h3>
            <p className="text-lg mb-4">
              Lauser adalah desainer UI/UX kami yang memastikan bahwa aplikasi Emotion AI mudah digunakan oleh semua orang. Ia berfokus pada pengalaman pengguna yang intuitif dan desain visual yang menarik.
            </p>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-br from-purple-500 to-purple-700 text-white" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-6">Siap untuk Mencoba Emotion AI?</h2>
        <p className="text-lg mb-10">
          Mulailah untuk menggali lebih dalam tentang bagaimana Emotion AI dapat membantu Anda memahami emosi dalam teks. Coba sekarang dan temukan wawasan baru yang bisa Anda aplikasikan!
        </p>
        <Link
          to="/motion-ai"
          className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 hover:bg-purple-400 transition-transform duration-300"
        >
          Mulai Sekarang
        </Link>
      </section>
    </div>
  );
}

export default AboutUs;
