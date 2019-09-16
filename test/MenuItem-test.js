import chai from 'chai';
const expect = chai.expect;
import MenuItem from '../src/MenuItem.js'
let mockMenuItemData = require('../mock-data/mock-menu-items');
let menuItem;

before(() => {
    mockMenuItemData.forEach(menuItem => MenuItem.all.push(new MenuItem(menuItem)))
    menuItem = MenuItem.all[0]
});

it('Should be an instance of MenuItem', () => {
    expect(menuItem).to.be.an.instanceOf(MenuItem);
})
  
it('find or create a menu item', () => {
    expect(MenuItem.findOrCreateMenuItem("2019/10/19")).to.eql(9);
})
  
it('find a menu item by id', () => {
    console.log(MenuItem.findById(1))
    expect(MenuItem.findById(100)).to.eql(9);
  })