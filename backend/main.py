from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import date

from schemas import Item
from application import TodoApplication

app: FastAPI = FastAPI()

origins = [
    "http://localhost:3001",
    "https://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db: TodoApplication = TodoApplication()

@app.post("/add")
async def add_item(item: Item):
  print(item)
  result = db.add_item(item)
  return {"id": result}

@app.get("/read_all")
async def read_all_items():
  result = db.read_all_items()
  return {"items": result}