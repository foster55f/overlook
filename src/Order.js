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
}
    
Order.all = [];
    
export default Order;