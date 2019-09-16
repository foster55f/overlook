import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking.js'
let mockBookingData = require('../mock-data/mock-booking');
let booking;

before(() => {
  mockBookingData.forEach(booking => Booking.all.push(new Booking(booking)))
  booking = Booking.all[0]
});

describe('Booking', () => {

  it('Should be an instance of Booking', () => {
    expect(booking).to.be.an.instanceOf(Booking);
  })

  it('should display total rooms booked for a date', () => {
    expect(Booking.findBookedRooms("2019/10/19")).to.eql([5]);
  })

  it('should sort room numbers to a date', () => {
    expect(Booking.occupiedRoomNumbersByDate()).to.eql({
      '2019/10/19': [ 5 ],
      '2019/10/30': [ 35 ],
      '2019/09/01': [ 41, 44 ],
      '2019/08/28': [ 13 ],
      '2019/08/16': [ 23 ],
      '2019/09/05': [ 26 ],
      '2019/10/29': [ 34 ],
      '2019/08/27': [ 37 ],
      '2019/09/26': [ 36 ],
      '2019/09/27': [ 12 ],
      '2019/09/29': [ 34 ],
      '2019/08/29': [ 45 ],
      '2019/09/06': [ 19 ],
      '2019/08/30': [ 13 ]
    });
  })
  
it('should display the date rooms are least booked', () => {
  console.log(Booking.findDateLeastRoomsBooked());
  expect(Booking.findDateLeastRoomsBooked()).to.eql('2019/08/30');
})
  
it('should display the date the most rooms are booked', () => {
  console.log(Booking.findDateMostRoomsBooked());
  expect(Booking.findDateMostRoomsBooked()).to.eql('2019/09/01');
})
  
it('should display the date the most rooms are booked', () => {
  console.log(Booking.findAllByCustomer(88));
  expect(Booking.findAllByCustomer(88)).to.eql([{
    "id": 4,
    "date": "2019/08/28",
    "roomNumber": 13,
    "customerId": 88
  }]);
  })



});