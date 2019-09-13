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
      .catch(err => console.log(err));
  }
}

Room.all = []

export default Room;