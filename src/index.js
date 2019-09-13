
import $ from 'jquery';
import './css/base.scss';

import Customer from './Customer';
import Room from './Room';
import Booking from './Booking';
import Order from './Order';
import MenuItem from './MenuItem';


let customer;


$(window).on("load",(e) => {
    e.preventDefault();
    Customer.loadFromData();
    Room.loadFromData();
    Booking.loadFromData();
    Order.loadFromData();
});

$('#main').click(function() {
    $('.welcome-banner').hide();
    $('.main-game').fadeIn('swing');
    $(".questions__current--question--prompt").hide();
    $(".questions__current--question").hide();
  })

    
    

