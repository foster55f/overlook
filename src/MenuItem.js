class MenuItem {
  constructor(name, cost) {
    this.id = MenuItem.all.length + 1 
    this.name = name;
    this.cost = cost;
  }
    
  static findOrCreateMenuItem(foodName, cost) {
    for (var menuItem of MenuItem.all) {
      if (menuItem.name === foodName) {
        return menuItem.id;
      }
    }

    let newItem = new MenuItem(foodName, cost)
    MenuItem.all.push(newItem);
    return newItem.id;
  }
}

MenuItem.all = []

export default MenuItem;