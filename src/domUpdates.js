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
        $('.order-results').empty()
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
    },

    appendCustomerOrderRevenue(revenue) {
        $('.order-results').append(`<p>Total room service bill for today: ${revenue}</p>`)
    },

    appendCustomerTotalOrderRevenue(revenue) {
        $('.order-results').append(`<p>Total room service bill for all time: ${revenue}</p>`)
    },

    appendNoOrdersFound() {
        $('.order-results').empty()
        $('.order-results').append(`<p>No Orders found</p>`)
    },

    appendDefaultRoomTabData(mostPopularDate, leastPopularDate) {
        $('.rooms-section').empty()
        $('.rooms-section').append(`<p>Most popular date: ${mostPopularDate}</p>`)
        $('.rooms-section').append(`<p>Date with most rooms available: ${leastPopularDate}</p>`)
    },

    appendCustomerBookings(bookings, date) {
        bookings.forEach(booking => {
            $('.rooms-section').append(`
            <div class="room-available">
            <p>Id: ${booking.id}</p>
            <p>Booking Date: ${booking.date}</p>
            <p>Room Number: ${booking.roomNumber}</p>
            </div>`)
            if (booking.date === date) {
                $('.room-available').last().append(`<button class="room-service-button">Create New Room Service Order</button>`)
            }
        })
    },

    appendNoBookingInfoFound() {
        $('.rooms-section').empty()
        $('.rooms-section').append(`<p>No past bookings found</p>`)
        $('.rooms-section').append(`<button>Create new Booking</button>`)

    },

    appendRoomsAvailableInfo(roomsAvailable) {
        roomsAvailable.forEach(room => {
            $('.rooms-section').append(`
            <div class="room-available">
            <p>Room: ${room.bedSize}</p>
            <p>Room Type: ${room.roomType}</p>
            <p>Bidet Availability: ${room.bidetAvailable}</p>
            <p>Number of Beds: ${room.numberOfBeds}</p>
            </div>`)
        })
    },

    appendMenuItems(menuItems) {
        menuItems.forEach(item => {
            $('.rooms-section').append(`
            <div class="menu-item">
            <p>Id: ${item.id}</p>
            <p>Food Item: ${item.name}</p>
            <p>Food Cost: ${item.cost}</p>
            <button>Purchase</button>
            </div>`)
        })
    }
}
