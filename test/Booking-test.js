import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking.js'
import Room from '../src/Booking.js'
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

  it('should have a length of total bookings', () => {
    booking.calculateRoomsAvailableTodaysDate();
    expect(Booking.all.length).to.equal(15);
  })

  it('should display total rooms available for todays date', () => {
    booking.calculateRoomsAvailableTodaysDate();
    expect(Booking.calculateRoomsAvailableTodaysDate()).to.equal(15);
  })


});