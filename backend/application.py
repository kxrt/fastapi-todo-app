from schemas import Item

class TodoApplication:
  def __init__(self):
    self.items: dict(int, Item) = dict()
    self.add_item(item=Item(id=1, description="Buy milk", due="2021-10-01"))

  def add_item(self, item: Item):
    self.items[item.id] = item
    return item.id

  def read_all_items(self):
    return list(self.items.values())