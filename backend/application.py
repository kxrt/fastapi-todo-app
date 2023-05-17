from schemas import Item

class TodoApplication:
  def __init__(self):
    self.items: dict(int, Item) = dict()

  def add_item(self, item: Item):
    self.items[item.id] = item
    return item.id

  def read_all_items(self):
    return list(self.items.values())