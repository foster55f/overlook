import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer.js'
let mockUserData = require('../mock-data/mock-user');
let customer;

before(() => {
    mockUserData.forEach(customer => Customer.all.push(new Customer(customer)))
    customer = Customer.all[0]
});
  
it('Should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
})
  
it('Should be able to find customers by name', () => {
    expect(Customer.findAllByName("Chadrick Lowe")).to.eql([ { id: 2, name: 'Chadrick Lowe' } ])
})
  