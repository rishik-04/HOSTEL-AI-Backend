from fastapi import FastAPI
from pydantic import BaseModel
import os
import json

from groq import Groq
from dotenv import load_dotenv
from prompt import SYSTEM_PROMPT

# Load API key
load_dotenv()

# Create Groq client
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

# Create FastAPI app
app = FastAPI()

# Store complaint history
complaint_history = []

# Request model
class Complaint(BaseModel):
    complaint: str


# Home API
@app.get("/")
def home():
    return {
        "message": "AI Hostel Complaint Service Running Successfully"
    }


# Analyze Complaint API
@app.post("/analyze")
def analyze(data: Complaint):

    # Ask Groq AI
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": data.complaint
            }
        ],
        temperature=0
    )

    # AI response
    ai_response = response.choices[0].message.content

    # Convert AI JSON string to Python dictionary
    result = json.loads(ai_response)

    # -----------------------------
    # Duplicate Detection
    # -----------------------------
    duplicate = False

    for item in complaint_history:
        if item["complaint"].lower() == data.complaint.lower():
            duplicate = True
            break

    # Add duplicate field
    result["duplicate"] = duplicate

    # Save complaint
    complaint_history.append({
        "complaint": data.complaint,
        "response": result
    })

    return result


# Complaint History API
@app.get("/history")
def get_history():
    return complaint_history