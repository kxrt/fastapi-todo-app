from pydantic import BaseModel
from datetime import date

class Item(BaseModel):
  id: int
  description: str
  due: date

  
class ItemConfig(Item): 
  class Config:
        orm_mode = True