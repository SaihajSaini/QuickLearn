import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Flashcard(BaseModel):
    question: str
    answer: str
class Flashcards(BaseModel):
    title: str
    flashcards: List[Flashcard]
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"flashcards": []}

@app.get("/flashcards", response_model=Flashcards)
def get_flashcard_sets():
    return Flashcards(flashcards=memory_db["Flashcards"])

@app.post("/flashcards", response_model=Flashcard)
def create_flashcard_set(flashcard: Flashcards):
    memory_db["Flashcards"].append(flashcard)
    return flashcard

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)