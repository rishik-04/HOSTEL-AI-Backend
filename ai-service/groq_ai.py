import os
from groq import Groq
from dotenv import load_dotenv
from prompt import SYSTEM_PROMPT

# Load .env file
load_dotenv()

# Read API Key
api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY not found in .env")

# Create Groq client
client = Groq(api_key=api_key)

# Take complaint from user
complaint = input("Enter Hostel Complaint: ")

try:
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": complaint
            }
        ],
        temperature=0
    )

    print("\nAI Response:\n")
    print(response.choices[0].message.content)

except Exception as e:
    print("\nError:")
    print(e)