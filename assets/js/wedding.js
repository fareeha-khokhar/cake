document.addEventListener("DOMContentLoaded",function () {
    const container=document.getElementById("card-container");
    fetch("assets/js/wedding.json")
    .then((Response)=>Response.json())
    .then(data=>{
        container.innerHTML =" "
         let cards='';
        data.forEach(i=>{
            const availability = i.availability === "In Stock" ? "text-success" : "text-danger"
            cards +=`
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4 p-1">
                <div class="p-2">
                <div class="card">
                    <a href="assets/images/${i.image}" target="_blank"> <img src="assets/images/${i.image}" height="300px" class="card-img-top" alt="Coffee Cake"> </a>
                    <div class="card-body">
                      <h5 class="card-title">${i.title}</h5>
                        <div class="d-flex justify-content-between align-items-center">
                        <p><strong>Price:</strong>${i.price}</p>
                        <p class="${availability}" id="availability">${i.availability}</p>
                         </div>
                      <p class="card-text">${i.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <a href="wedding-detail.html" class="btn btn-warning" onclick="setid(${i.id})">See More</a>
                        </div>
                    </div>
                </div>
                </div>
             </div>
            `
            container.innerHTML=cards;
        });
    })
    
})