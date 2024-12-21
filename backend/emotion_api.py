from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
from fastapi.middleware.cors import CORSMiddleware

# Load model and vectorizer
try:
    model = joblib.load("emotion_model.pkl")
    vectorizer = joblib.load("tfidf_vectorizer.pkl")
    print("Model dan vectorizer berhasil dimuat.")
except Exception as e:
    print(f"Error loading model/vectorizer: {e}")
    raise Exception("Model atau vectorizer tidak ditemukan atau rusak.")

# Initialize FastAPI app
app = FastAPI()

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input data structure
class EmotionRequest(BaseModel):
    text: str

# Define output data structure
class EmotionResponse(BaseModel):
    emotion: str
    confidence: float

@app.post("/analyze", response_model=EmotionResponse)
def analyze_emotion(request: EmotionRequest):
    try:
        print("Request received:", request.text)

        # Vectorize input text
        vectorized_text = vectorizer.transform([request.text])
        print("Vectorized Text:", vectorized_text)

        # Predict emotion
        emotion_label = model.predict(vectorized_text)[0]  # Get label directly
        print("Predicted Label:", emotion_label, "Type:", type(emotion_label))

        # Get confidence score
        emotion_proba = model.predict_proba(vectorized_text).max()
        print("Confidence:", emotion_proba)

        return EmotionResponse(emotion=emotion_label, confidence=round(emotion_proba * 100, 2))
    except Exception as e:
        print(f"Error during emotion analysis: {e}")
        raise HTTPException(status_code=500, detail="Server error during emotion analysis.")