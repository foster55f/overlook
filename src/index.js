
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
    date = "2019/09/28"
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
    let orderRevenue = Order.findTotalOrderRevenue();
    let revenue = parseFloat(totalRevenue) + parseFloat(orderRevenue);
    let percentOccupied = Room.calculateRoomPercentageOccupied(availableRooms)
    // let menuItemOrders = MenuItem.findMenuItemOrderedToday(date)
    domUpdates.appendTotalRoomsAvailableToDom(availableRooms.length);
    domUpdates.appendTotalDailyRevenueToDom(revenue);
    // domUpdates.appendTotalPercentOccupied(percentOccupied);
    domUpdates.appendTotalPercentOccupiedToDom(percentOccupied);
})
  
$('.orders').click(function () {
    $(".orders-section").toggle();
    if (selectedCustomer) {
        let customerOrders = Order.findAllByCustomerId(selectedCustomer.id)
        if (customerOrders.length === 0) {
            domUpdates.appendNoOrdersFound() 
        } else {
            domUpdates.appendOrders(customerOrders)
            let customerOrdersForToday = Order.findOrdersForDate(customerOrders, date);
            let customerOrderRevenueForToday = Order.findTotalOrderRevenue(customerOrdersForToday);
            let customerOrderTotalRevenue = Order.findTotalOrderRevenue(customerOrders)
            domUpdates.appendCustomerOrderRevenue(customerOrderRevenueForToday)
            domUpdates.appendCustomerTotalOrderRevenue(customerOrderTotalRevenue)
        }
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
    // $(".rooms-section").toggle();    
    let bookedRoomIds = Booking.findBookedRooms(date)
    let availableRooms = Room.findAvailableRooms(bookedRoomIds)
    // let totalRevenue = Room.findTotalRoomRevenue(availableRooms);
    let occupiedRoomNumbers = Booking.occupiedRoomNumbersByDate()

    if (selectedCustomer) {
        let customerBookings = Booking.findAllByCustomer(selectedCustomer.id);
        if (customerBookings.length === 0) {
            domUpdates.appendNoBookingInfoFound()
        }
        domUpdates.appendCustomerBookings(customerBookings, date)
        domUpdates.appendRoomsAvailableInfo(availableRooms)  
    } else {       
        let leastPopularDate = Booking.findDateLeastRoomsBooked()
        let mostPopularDate = Booking.findDateMostRoomsBooked();
        domUpdates.appendDefaultRoomTabData(mostPopularDate, leastPopularDate);
    }
    
})
  
$('.customer').click(function() {
    $('.customer-section').toggle();    
    
})

$('.create-booking-button').click(function() {    
    $('.roomtype-menu').show()

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

$('.rooms-section').click(function (e) {    
    if (e.target.className === "room-service-button") {
        $('.rooms-section').empty()
        domUpdates.appendMenuItems(MenuItem.all) 
    }
})


  

    
    

