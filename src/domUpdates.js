import $ from "jquery";
import Booking from '../src/Booking.js'

export default {
    getDate() {
        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return yyyy + '/' + mm + '/' + dd;
        
    },

    appendDateToDom(date) {
        $(`h1`).text(date);
    },

    appendTotalRoomsAvailableToDom(availableRoomCount) {
        $('h2').text('There are ' + availableRoomCount + ' Rooms Available Today')
    },
    
    appendTotalDailyRevenueToDom(revenue) {
        $('h3').text('Total Revenue is $' + revenue + ' Today');
    },

    appendTotalPercentOccupiedToDom(percentOccupied) {
        $('h4').text('Get to work we only have ' + percentOccupied + '% rooms booked today')
    },

    appendCustomerInfo(customerName) {
        $('h5').text('Found Customer:' + customerName)
    },

    appendTotalOrderRevenue(orderRevenue) {
        $('.order-total-revenue').text('Total Order Revenue is $' + orderRevenue + ' Today');
    },

    appendDailyOrderRevenue(orderRevenue) {
        $('.order-daily-revenue').text('Total Daily Order Revenue is $' + orderRevenue + ' Today');
    },

    appendCustomerNames(customers) {
        $('.customer-results').empty()
        customers.forEach(customer => {
            $('.customer-results').append($("<li>").attr('data-id', `${customer.id}`).text(customer.name));
        })
    },

    appendOrders(orders) {
        orders.forEach(order => {
            $('.order-results').append('<section></section>')
            $('.order-results').children().last().addClass('order-detail').append('<p></p>');
            $('.order-detail p:last').text("Id:" + `${order.id}`)
            
            $('.order-detail:last').append('<p></p>');
            $('.order-detail p:last').text("Date:" + `${order.date}`)
            
            $('.order-detail:last').append('<p></p>');
            $('.order-detail p:last').text("Customer Id:" + `${order.customerId}`)
            
            $('.order-detail:last').append('<p></p>');
            $('.order-detail p:last').text("Menu Item Id:" + `${order.menuItemId}`)
        })
    },

    appendOrderSearch(orders) {
        orders.forEach(order => {
            $('.order-section').append('<input></input>')
            $('.order-section').append('<button></button>')
        })
    },
    
    appendSelectedCustomer(selectedCustomer) {
        $('.selected-customer').text(selectedCustomer.name);
    },

    noCustomersFound() {
        $('.customer-results').empty()
        $('.customer-results').append('<p> No Customers Found</p>')
    }
}
