document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("detail_section");
    var id = localStorage.getItem("id");

    fetch("assets/js/anniversary.json")
        .then((Response) => Response.json())
        .then((data) => data.find(detail => detail.id == id))  // Use `find` since only one detail is expected
        .then((i) => {  // `i` is the selected product detail
            // Update the innerHTML with product details dynamically
            container.innerHTML = `
                <div class="container p-5 border border-dark rounded-lg my-5">
        <div class="row ps-5">
            <!-- Product Image Section -->
            <div class="col-lg-5 col-md-6 col-sm-12 mb-2">
                <div class="product-image">
                    <img src="assets/images/${i.image}" alt="${i.title}" class="img-fluid rounded-top mb-2">
                </div>
                <div class="delivery-info mt-4 mb-0">
                    <h4 class="text-warning h2">Delivery Information</h4>
                    <p class="mb-0">We offer free delivery within select areas of Karachi. For other areas, a delivery fee applies. Delivery time is 1-2 business days, but custom orders may take extra time.</p>
                </div>
            </div>
    
            <!-- Product Information Section -->
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="product-info">
                    <h1 class="text-warning mb-3">${i.title}</h1>
                    <p class="mb-4">${i.description}</p>
    
                    <div class="product-details">
                        <h4 class="text-warning h2">Product Details</h4>
                        <ul class="list-unstyled">
                            <li><strong>Item Code:</strong> ${i.itemCode}</li>
                            <li><strong>Price:</strong> ${i.price}</li>
                            <li><strong>Flavour:</strong> ${i.flavour}</li>
                            <li><strong>Cooking Method:</strong> ${i.cookingMethod}</li>
                            <li><strong>Weight:</strong> ${i.weight}g</li>
                            <li><strong>Base:</strong> ${i.base}</li>
                            <li><strong>Dietary Needs:</strong> ${i.dietaryNeeds}</li>
                        </ul>
                    </div>
                    <div class="care-instructions mt-4">
                        <h4 class="text-warning h2">Care Instructions</h4>
                        <p class="">Keep refrigerated. Best consumed within 2 days. Store in an airtight container to maintain freshness.</p>
                    </div>
                </div>
            </div>
    
            <!-- Order Buttons Section -->
            <div class="order-buttons mt-4">
                <a href="order.html" target="_blank" class="btn btn-warning me-1">Order Now</a>
                <a href="cart.html" id="addToCartBtn" class="btn btn-outline-dark">Add to Cart</a>
            </div>
        </div>
    </div>
            `;
        })
        .catch((error) => {
            console.error("Error loading product details:", error);
            container.innerHTML = "<p>Product details not found.</p>";
        });
});
