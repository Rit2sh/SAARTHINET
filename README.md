# saarthinet# SaarthiNet 🧠🇮🇳

> Voice-First Multilingual AI Assistant with Secure Query Dashboard & User Analytics

SaarthiNet enables Indian users to interact with government and digital services through Hindi/English voice queries. Includes secure login, NLP logic, and a full-stack dashboard with query history and analytics.

---

## 🧩 Features

- 🔐 JWT-based Authentication
- 🗣️ Voice Input + Multilingual (Hindi/English)
- 🤖 AI Assistant (Rule-based + LLM-ready)
- 📊 Dashboard with Query History & Charts
- 🧾 MongoDB or PostgreSQL Integration Ready

---

## 📂 Project Structure

```bash
saarthinet/
├── backend/
│   ├── main.py                 # FastAPI app
│   ├── requirements.txt        # Backend dependencies
│   └── .env                    # Secret keys, DB URLs
├── frontend/
│   ├── package.json            # React app config
│   └── src/
│       ├── App.jsx             # Loads dashboard
│       └── Dashboard.jsx       # Renders charts & history
└── README.md
