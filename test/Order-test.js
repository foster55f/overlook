import chai from 'chai';
const expect = chai.expect;
import Order from '../src/Order.js'
let mockOrderData = require('../mock-data/mock-orders');
let order;

before(() => {
  mockOrderData.forEach(order => Order.all.push(new Order(order)))
  order = Order.all[0]
});

describe('Order', () => {

    it('Should be an instance of Order', () => {
    expect(order).to.be.an.instanceOf(Order);
  })
    
    it('should display orders for a date', () => {
      console.log(Order.findOrdersForDate("2019/10/18", mockOrderData))
    expect(Order.findOrdersForDate("2019/10/18", mockOrderData)).to.eql([{
        "userID": 100,
        "date": "2019/10/18",
        "food": "Rustic Cotton Sandwich",
        "totalCost": 17.33
    },
    {
        "userID": 55,
        "date": "2019/10/18",
        "food": "Unbranded Wooden Sandwich",
        "totalCost": 7.95
      }],
    );
    })
    
    it('Should find all orders by Customer Id', () => {
        expect(order.date).to.equal('2019/07/29')
    })

    it('Should find the total order revenue', () => {
        expect(Order.findTotalOrderRevenue(mockOrderData)).to.eql()
        })
});