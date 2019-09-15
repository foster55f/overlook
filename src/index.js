
import $ from 'jquery';
import './css/base.scss';

import Customer from './Customer';
import Room from './Room';
import Booking from './Booking';
import Order from './Order';
import MenuItem from './MenuItem';
import domUpdates from "./domUpdates";


let selectedCustomer;
let date;


$(window).on("load", (e) => {
    // date = domUpdates.getDate();
    date = "2019/10/18"
    e.preventDefault();
    Customer.loadFromData();
    Room.loadFromData();
    Booking.loadFromData();
    Order.loadFromData();
    domUpdates.appendDateToDom(date);
});

$('.main').click(function () {
    $(".main-section").toggle();
    let menuItemsToday = Order.findOrdersForDate(date);
    let bookedRoomIds = Booking.findBookedRooms(date)
    let availableRooms = Room.findAvailableRooms(bookedRoomIds)
    let totalRevenue = Room.findTotalRoomRevenue(availableRooms);
    let orderRevenue = Order.findTotalOrderRevenueForDate(date);
    let revenue = parseFloat(totalRevenue) + parseFloat(orderRevenue);
    let percentOccupied = Room.calculateRoomPercentageOccupied(availableRooms)
    // let menuItemOrders = MenuItem.findMenuItemOrderedToday(date)
    Order.findTotalOrderRevenueForDate(); 
    domUpdates.appendTotalRoomsAvailableToDom(availableRooms.length);
    domUpdates.appendTotalDailyRevenueToDom(revenue);
    // domUpdates.appendTotalPercentOccupied(percentOccupied);
    domUpdates.appendTotalPercentOccupiedToDom(percentOccupied);
})
  
$('.orders').click(function () {
    $(".orders-section").toggle();
    if (selectedCustomer) {
        
    } else {
        let orders = Order.findOrdersForDate(date)
        domUpdates.appendOrders(orders)
        domUpdates.appendOrderSearch(orders) 
    }
    // let orderRevenueForDate = Order.findTotalOrderRevenueForDate(date)
    // let allTimeOrderRevenue = Order.findTotalOrderRevenueForDate()
    // domUpdates.appendDailyOrderRevenue(orderRevenueForDate)
    // domUpdates.appendTotalOrderRevenue(allTimeOrderRevenue)

})
  
$('.rooms').click(function () {
    // let totalRevenue = Room.findTotalRoomRevenue(availableRooms);
    // Booking.occupiedRoomNumbersByDate()
    // Booking.findDateLeastRoomsBooked()
    // Booking.findDateMostRoomsBooked()
    let bookedRoomIds = Booking.findBookedRooms(date)
    let availableRooms = Room.findAvailableRooms(bookedRoomIds)
    console.log(Room.filterByType("residential suite", availableRooms))
    // console.log(Booking.customerPastCurrentBookings(23))
    $(".rooms-section").toggle();
})
  
$('.customer').click(function() {
    $(".customer-section").toggle();    
    
})

$('.create-customer-button').click(function() {    
    $('.create-customer-input').val()

})

$('#customer-search').on('keyup', function () {
    var searchVal = $('#customer-search').val();
    var customers = Customer.findAllByName(searchVal); 
    if (customers.length === 0) {
        domUpdates.noCustomersFound()
    } else {
        domUpdates.appendCustomerNames(customers)
    }
    // let customerName = foundName.map(person => {
    //     return person.name
    // })
        
    //     domUpdates.appendCustomerInfo(customerName)
    //     // need to display array to dom and fix search to better target name as value placed in input
    // console.log(customerName)
});
    
$('.create-customer-input').keydown(function () {
    if (
      $('.create-customer-input').val() !== '') {
      $('.create-customer-button').prop('disabled', false);
    }
});
$('.customer-results').click((e) => {
    let customers = Customer.findAllByName(e.target.innerHTML);
    let customer = customers.find((customer) => {
        return e.target.getAttribute('data-id') == customer.id
    })

    selectedCustomer = customer
    domUpdates.appendSelectedCustomer(selectedCustomer)
})
  

  

    
    

