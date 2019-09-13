
import $ from 'jquery';
import './css/base.scss';

import Customer from './Customer';
import Room from './Room';
import Booking from './Booking';
import Order from './Order';
import MenuItem from './MenuItem';
import domUpdates from "./domUpdates";


let customer;
let date;


$(window).on("load", (e) => {
    date = domUpdates.getDate();
    e.preventDefault();
    Customer.loadFromData();
    Room.loadFromData();
    Booking.loadFromData();
    Order.loadFromData();
    domUpdates.appendDateToDom(date);
});

$('.main').click(function() {
    $(".main-section").toggle();
})
  
$('.orders').click(function() {
    $(".orders-section").toggle();
})
  
$('.rooms').click(function() {
    $(".rooms-section").toggle();

})
  
$('.customer').click(function() {
    $(".customer-section").toggle();
    
  })

    
    

