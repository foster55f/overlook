import MenuItem from "./MenuItem";

class Order {
  constructor(orderData) {
    this.id = Order.all.length + 1;
    this.date = orderData.date;
    this.customerId = orderData.userID;
    this.menuItemId = orderData.menuItemId;
  }
        
  static loadFromData() {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices")
      .then(data => data.json())
      .then(data => data.roomServices.forEach(order => { 
          let menuItemId = MenuItem.findOrCreateMenuItem(order.food, order.totalCost);
          order.menuItemId = menuItemId;
        Order.all.push(new Order(order))
      }))  
      .catch(err => console.log(err));
  }   

  static findOrdersForDate(date, orders = Order.all) {
    console.log(orders)
    return orders.filter(order => {
      return order.date === date
    })
  }

  static findAllByCustomerId(customerId) {
    return Order.all.filter((order) => {
      return order.customerId === customerId
    })
  }

  static findTotalOrderRevenue(orders = Order.all) {
    let menuItemIds = orders.map(order => order.menuItemId);
    let menuItems = MenuItem.findById(menuItemIds);

    var orderRevenue = menuItems.reduce((acc, item) => {
      acc += item.cost;
      return acc
    }, 0)
    return orderRevenue.toFixed(2)
  }


  // Breakdown of dates and dollar amounts for room service
  // - Total dollar amount spent on room service for a particular day
  // - Total dollar amount spent on room service for all days ever
}
    
Order.all = [];
    
export default Order;