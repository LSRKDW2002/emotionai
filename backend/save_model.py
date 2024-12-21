import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

# Load dataset dari root folder
data = pd.read_csv("../CleanPrepared.csv")  # Ganti path relatif jika file berada di root folder

# Ambil kolom teks dan label
texts = data['Text']  # Pastikan kolom bernama "Text"
labels = data['Emotion']  # Pastikan kolom bernama "Emotion"

# Lakukan vectorisasi
tfidf_vectorizer = TfidfVectorizer()
X = tfidf_vectorizer.fit_transform(texts)

# Latih model
model = MultinomialNB()
model.fit(X, labels)

# Simpan model dan vectorizer di backend
joblib.dump(model, "emotion_model.pkl")
joblib.dump(tfidf_vectorizer, "tfidf_vectorizer.pkl")

print("Model dan vectorizer berhasil disimpan!")