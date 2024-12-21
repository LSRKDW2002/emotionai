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
    confidence: 75,
  });
  const [showModal, setShowModal] = useState(true); // State for modal visibility
  const [modalStep, setModalStep] = useState(0); // State for modal steps

  const handleAnalyze = () => {
    // Placeholder for backend API call
    setAnalysis({
      emotion: 'Happy', // Simulasi hasil emosi
      confidence: 75,
    });
  };

  const nextModalStep = () => {
    if (modalStep < 2) setModalStep(modalStep + 1);
    else {
      // Add animation for modal disappearing
      setShowModal(false); // Close modal after animation
    }
  };

  const emotionIcons = {
    Happy: faSmile,
    Neutral: faMeh,
    Sad: faFrown,
    Angry: faAngry,
  };

  const emotionLabels = {
    Happy: 'Bahagia',
    Neutral: 'Netral',
    Sad: 'Sedih',
    Angry: 'Marah',
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
      <div className={`flex flex-col items-center px-6 py-10 ${showModal ? 'opacity-20' : 'opacity-100'}`}>
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-down">
          Analisis emosi dengan text
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
          placeholder="Enter text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-aos="fade-up"
        ></textarea>
        <button
          onClick={handleAnalyze}
          className="mt-4 px-6 py-3 bg-white text-purple-600 font-bold rounded-md hover:bg-purple-200 hover:scale-105 transition duration-300 blinking-button"
          data-aos="zoom-in"
        >
          Analisis Emosi
        </button>

        {/* Hasil Analisis */}
        <div
          className="mt-10 w-full md:w-2/3 bg-white bg-opacity-20 p-6 rounded-md shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-bold mb-6 text-white">Emotion Prediction</h2>
          <div className="flex justify-between items-center mb-8">
            {Object.keys(emotionIcons).map((emo) => (
              <div
                key={emo}
                className={`flex flex-col items-center w-1/4 p-2 rounded-lg transition ${
                  analysis.emotion === emo ? 'bg-purple-500 bg-opacity-50' : 'bg-transparent'
                } hover:animate-bounce`}
              >
                <FontAwesomeIcon
                  icon={emotionIcons[emo]}
                  className={`text-3xl mb-2 ${
                    analysis.emotion === emo ? 'text-purple-200' : 'text-purple-400'
                  } hover:animate-bounce`}
                />
                <span
                  className={`font-medium ${
                    analysis.emotion === emo ? 'text-white' : 'text-purple-300'
                  }`}
                >
                  {emotionLabels[emo]}
                </span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-purple-200 mb-2">
              Confidence: <span className="text-white">{analysis.confidence}%</span>
            </p>
            <div className="w-full bg-purple-300 h-2 rounded-full">
              <div
                className="bg-purple-500 h-2 rounded-full"
                style={{ width: `${analysis.confidence}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS Animations */}
      <style jsx>{`
        .blinking-button {
          animation: blink 1.5s infinite ease-in-out;
        }

        @keyframes blink {
          0%, 100% {
            background-color: #ffffff;
          }
          50% {
            background-color: #d1c4e9;
          }
        }

        .blinking-button:hover {
          animation: none;
          background-color: #d1c4e9;
        }

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
