// Contact Form Validation
// this validation form validation prevents submission unless all fields are filled, providing feedback to the  user with a alert. 
// this is effective for a quick form of validation and enhances UX by guilding users to complete required fields before submissions 
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
// checking if all fields are filled
    if (name && email && message) {
        alert('Message sent successfully!');
        this.reset();
    } else {
        alert('Please fill out all fields.'); // alerts if fields are missing 
    }
});

// Lazy Loading for Images
// Using lazy loading in JS helps improve performance by reducing initial load times, especially on pages with many images. The script applies src attributes to data-src images only when nessary, thus conserving bandwith and speeding up load times.
// although lazy loading can be supported in HTML directly, this JAVA script technique offers more controll, ensuring compatibility across browers that may not fully supoort native lazy loading.
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    lazyImages.forEach(img => {
        img.src = img.getAttribute("data-src");
    });
});

// Search Function
function searchProducts() {
    // Get the search input value
    const query = document.getElementById("search-input").value.toLowerCase();
    
    // Get all product elements
    const products = document.querySelectorAll(".product");

    // Loop through each product and check if it matches the search query
    products.forEach((product) => {
        // Check if the product name or description includes the search query
        const productName = product.querySelector("h3, h4").textContent.toLowerCase();
        const productDescription = product.querySelector("p").textContent.toLowerCase();

        if (productName.includes(query) || productDescription.includes(query)) {
            product.style.display = "block"; // Show matching product
        } else {
            product.style.display = "none"; // Hide non-matching product
        }
    });
}

// alert for coming soon item
// instead of attaching click eevents individually to each product marked as coming soon the code uses forEach loop to add an event listener to all elements with the coming-soon class. when the user clicks on a coming sooon item an alert displays the message.
// this event handling method is memory efficient and scales well with the number of coming sonn products. 
document.querySelectorAll('.coming-soon').forEach(product => {
    product.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default action
        alert('This product is coming soon! Stay tuned for updates.');
    });
});
