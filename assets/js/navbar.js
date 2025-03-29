var data  = document.querySelector("header").innerHTML+=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="Logo" style="height: 70px; width: auto;" class="me-2">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item h5">
            <a class="nav-link text-warning" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item h5">
            <a class="nav-link text-warning" href="about.html">About Us</a>
          </li>
          <li class="nav-item dropdown h5">
            <a class="nav-link text-warning dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul class="dropdown-menu text-warning bg-dark" aria-labelledby="productsDropdown">
              <li><a class="dropdown-item text-warning" href="birthday.html">Birthday Cake</a></li>
              <li><a class="dropdown-item text-warning" href="wedding.html">Wedding Cake</a></li>
              <li><a class="dropdown-item text-warning" href="anniversary.html">Anniversary Cakes</a></li>
              <li><a class="dropdown-item text-warning" href="engagement.html">Engagement Cakes</a></li>
              <hr>
              <li><a class="dropdown-item text-warning" href="sweet.html">Sweet Treats</a></li>
              <li><a class="dropdown-item text-warning" href="national.html">National Events</a></li>
              <li><a class="dropdown-item text-warning" href="corporate.html">Corporate Events</a></li>
            </ul>
          </li>
          <li class="nav-item h5">
            <a class="nav-link text-warning" href="contact.html">Contact Us</a>
          </li>
        </ul>
        <div class="d-flex">
          <a href="signup.html"> 
          <button class="btn btn-outline-warning me-2" type="button" >
            Sign Up
          </button>
          </a>
          <a href="login.html">
          <button class="btn btn-warning" type="button" >
            Log In
          </button>
          </a>
        </div>
      </div>
    </div>
  </nav>
`