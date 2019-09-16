import chai from 'chai';
const expect = chai.expect;
import Room from '../src/Room.js'
let mockRoomData = require('../mock-data/mock-room');
let room;

before(() => {
  mockRoomData.forEach(room => Room.all.push(new Room(room)))
  room = Room.all[0]
});

describe('Room', () => {

    it('Should be an instance of Room', () => {
        expect(room).to.be.an.instanceOf(Room);
    })

    it('should be able to find available rooms', () => {
        expect(Room.findAvailableRooms("2019/10/19")).to.eql([5]);
      })
})