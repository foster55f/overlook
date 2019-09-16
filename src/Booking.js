class Booking {
  constructor(bookingData) {
    this.id = Booking.all.length + 1;
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumber;
    this.customerId = bookingData.userID;
  }
      
  static loadFromData() {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
      .then(data => data.json())
      .then(data => data.bookings.forEach(booking => Booking.all.push(new Booking(booking))))
      .catch(err => console.log(err));
  }

  static findBookedRooms(date) {
    var bookedRoomIds = []
    Booking.all.forEach(booking => {
      if (booking.date === date) {
        bookedRoomIds.push(booking.roomNumber)
      }
    })
    return bookedRoomIds
  }

  static sortByDate() {
    return Booking.all.reduce((acc, booking) => {
      if (!acc[booking.date]) {
        acc[booking.date] = []
      }
      acc[booking.date].push(booking.roomNumber);
      return acc
    }, {})
  }

  static occupiedRoomNumbersByDate() {
    return Booking.all.reduce((acc, booking) => {
      if (!acc[booking.date]) {
        acc[booking.date] = []
      }
      acc[booking.date].push(booking.roomNumber);
      return acc
    }, {})
  }

  static findDateLeastRoomsBooked() {
    var bookingCountsByDate = Booking.occupiedRoomNumbersByDate()
    return Object.keys(bookingCountsByDate).reduce((a, b) => {
      if (bookingCountsByDate[a].length < bookingCountsByDate[b].length) {
        return a
      } 
      return b
    })
  }

  static findDateMostRoomsBooked() {
    var bookingCountsByDate = Booking.occupiedRoomNumbersByDate()
    return Object.keys(bookingCountsByDate).reduce((a, b) => {
      if (bookingCountsByDate[a].length > bookingCountsByDate[b].length) {
        return a
      } 
      return b
    })
  }

  static findAllByCustomer(customerId) {
    return Booking.all.filter(booking => {
      return booking.customerId === customerId
  })
  }
}
  // Summary of all past and current bookings

  // Most popular booking date 
  // The date with the most rooms available
    // Reduce method with objects with key of date and value of number

  
Booking.all = []
  
export default Booking;