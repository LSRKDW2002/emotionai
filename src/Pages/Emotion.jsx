import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown, faAngry } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

function Emotion() {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState({
    emotion: 'Neutral',
    confidence: 0,
  });
  const [loading, setLoading] = useState(false); // State for loading feedback
  const [error, setError] = useState(''); // State for error handling
  const [showModal, setShowModal] = useState(true); // Modal state
  const [modalStep, setModalStep] = useState(0); // Modal step

  const handleAnalyze = async () => {
    if (!text.trim()) {
      alert('Masukkan teks untuk dianalisis!'); // Validasi input kosong
      return;
    }

    setLoading(true); // Mulai loading
    setError(''); // Reset error
    try {
      const response = await fetch('http://127.0.0.1:8001/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Gagal menghubungi backend.');
      }

      const data = await response.json();
      setAnalysis({
        emotion: data.emotion,
        confidence: data.confidence,
      });
    } catch (error) {
      console.error(error);
      setError('Terjadi kesalahan saat menganalisis emosi.');
    } finally {
      setLoading(false); // Selesai loading
    }
  };

  const nextModalStep = () => {
    if (modalStep < 2) setModalStep(modalStep + 1);
    else setShowModal(false); // Tutup modal setelah langkah terakhir
  };

  const emotionIcons = {
    Bahagia: faSmile,
    Netral: faMeh,
    Sedih: faFrown,
    Marah: faAngry,
  };

  const emotionColors = {
    Bahagia: 'text-green-400',
    Netral: 'text-gray-400',
    Sedih: 'text-blue-400',
    Marah: 'text-red-400',
  };

  const getConfidenceColor = (confidence) => {
    if (confidence < 25) return 'bg-red-500';
    if (confidence >= 25 && confidence < 50) return 'bg-orange-500';
    if (confidence >= 50 && confidence < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-purple-600 text-white">
      <Navbar />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-purple-800 bg-opacity-90 flex items-center justify-center z-50">
          <div
            className={`text-center p-8 bg-white rounded-lg shadow-lg w-full h-full max-w-full max-h-full overflow-auto flex flex-col justify-center items-center ${
              !showModal ? 'opacity-0 scale-95' : ''
            }`}
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="ease-out"
          >
            {modalStep === 0 && (
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">
                  Analisis Emosi Akurat
                </h2>
                <p className="text-purple-600">
                  Gunakan algoritma AI canggih untuk mendeteksi emosi dari teks dengan
                  akurasi tinggi.
                </p>
              </div>
            )}
            {modalStep === 1 && (
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">User-Friendly</h2>
                <p className="text-purple-600">
                  Desain sederhana dan mudah digunakan oleh siapa saja, tanpa memerlukan
                  pengalaman teknis.
                </p>
              </div>
            )}
            {modalStep === 2 && (
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Hasil Instan</h2>
                <p className="text-purple-600">
                  Dapatkan hasil analisis hanya dalam hitungan detik dengan visualisasi yang
                  menarik.
                </p>
              </div>
            )}
            <button
              onClick={nextModalStep}
              className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition duration-300"
            >
              {modalStep < 2 ? 'Next' : 'Mulai'}
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col items-center px-6 py-10">
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-down">
          Analisis emosi dengan teks
        </h1>
        <p
          className="text-purple-200 mb-8 text-center max-w-lg"
          data-aos="fade-up"
        >
          Tempel atau tulis teks untuk menganalisis emosi yang disampaikan. Anda akan
          menerima analisis mendetail dan visualisasi emosi yang terdeteksi.
        </p>
        <textarea
          className="w-full md:w-2/3 p-4 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="4"
          placeholder="Masukkan teks Anda di sini"
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-aos="fade-up"
        ></textarea>
        <button
          onClick={handleAnalyze}
          className={`mt-4 px-6 py-3 bg-white text-purple-600 font-bold rounded-md hover:bg-purple-200 hover:scale-105 transition duration-300 ${
            loading ? 'cursor-wait' : ''
          }`}
          disabled={loading}
          data-aos="zoom-in"
        >
          {loading ? 'Menganalisis...' : 'Analisis Emosi'}
        </button>

        {/* Hasil Analisis */}
        <div
          className="mt-10 w-full md:w-2/3 bg-white bg-opacity-20 p-6 rounded-md shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-bold mb-6 text-white">Hasil Analisis</h2>
          {error && <p className="text-red-400">{error}</p>}
          {!error && (
            <div>
              {/* Tampilkan FontAwesome icon berdasarkan emosi */}
              <div className="flex justify-center items-center mb-4">
                <FontAwesomeIcon
                  icon={emotionIcons[analysis.emotion] || faMeh}
                  className={`text-6xl ${
                    emotionColors[analysis.emotion] || 'text-gray-400'
                  }`}
                />
              </div>
              <p className="text-center text-lg font-bold text-white">
                Emosi: {analysis.emotion}
              </p>

              {/* Confidence Bar */}
              <div className="mt-4">
                <p className="text-purple-200 mb-2">
                  Confidence: <span className="text-white">{analysis.confidence}%</span>
                </p>
                <div className="w-full bg-purple-300 h-2 rounded-full">
                  <div
                    className={`h-2 rounded-full ${getConfidenceColor(
                      analysis.confidence
                    )}`}
                    style={{ width: `${analysis.confidence}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inline CSS Animations */}
      <style jsx>{`
        .hover\\:animate-bounce:hover {
          animation: bounce 0.6s infinite alternate;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Emotion;