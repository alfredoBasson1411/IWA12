document.addEventListener('DOMContentLoaded', function() {
    const books = document.querySelectorAll('[id^="book"]');
    
    books.forEach((book) => {
        const statusElement = book.querySelector('.status');
        const reserveBtn = book.querySelector('.reserve');
        const checkoutBtn = book.querySelector('.checkout');
        const checkinBtn = book.querySelector('.checkin');

        const statusKey = statusElement.textContent.trim().toLowerCase();
        const statusInfo = STATUS_MAP[statusKey];

        if (statusInfo) {
            // Set status indicator color
            statusElement.style.color = statusInfo.color;

            // Enable/disable buttons based on status properties
            reserveBtn.disabled = !statusInfo.canReserve;
            checkoutBtn.disabled = !statusInfo.canCheckout;
            checkinBtn.disabled = !statusInfo.canCheckIn;

            // Set buttons to grayscale
            reserveBtn.style.filter = "grayscale(100%)";
            checkoutBtn.style.filter = "grayscale(100%)";
            checkinBtn.style.filter = "grayscale(100%)";
        }
    });
});
//test