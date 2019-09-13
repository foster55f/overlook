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
      console.log(Booking.all)
    
  }

  totalRoomsAvailableTodaysDate() {
    
  }
  
}
  
Booking.all = []
  
export default Booking;