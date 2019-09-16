class Room {
  constructor(roomData) {
    this.roomNumber = roomData.number;
    this.roomType = roomData.roomType;
    this.bidetAvailable = roomData.bidet;
    this.bedSize = roomData.bedSize;
    this.numberOfBeds = roomData.numBeds;
    this.costPerNight = roomData.costPerNight;
  }
    
  static loadFromData() {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
      .then(data => data.json())
      .then(data => data.rooms.forEach(room => Room.all.push(new Room(room))))
      // .then(() => console.log(Room.all))
      .catch(err => console.log(err));
  }

  static findAvailableRooms(occupiedRoomNumbers) {
    var array = Room.all.filter(room => {
      return !occupiedRoomNumbers.includes(room.roomNumber)
    })
    return array
  }

  static findTotalRoomRevenue(occupiedRoomNumbers) {
    return occupiedRoomNumbers.reduce((acc, room) => {
      acc += room.costPerNight;
      return acc
    }, 0)
  }

  static calculateRoomPercentageOccupied(occupiedRoomNumbers) {
    return Math.round((occupiedRoomNumbers.length/Room.all.length) * 100)
  }

  static filterByType(roomType, availableRooms) {
    let roomOptions = availableRooms.filter(room => {
      return room.roomType === roomType
    })

    if (roomOptions.length === 0) {
      console.log(ava)
      return availableRooms;
    }
    return roomOptions
  }
}

Room.all = []

export default Room;