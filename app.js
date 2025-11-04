// Page content templates
const pages = {
    home: `
        <!-- Hero Section -->
        <section class="hero is-primary is-large">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-1 has-text-white">
                        Find Your Perfect Club
                    </h1>
                    <h2 class="subtitle is-3 has-text-white">
                        The premier marketplace for buying and selling used golf clubs
                    </h2>
                    <button class="button is-large is-light" onclick="loadPage('browse')">
                        <strong>Start Browsing</strong>
                        <span class="icon">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Search Section -->
        <section class="section">
            <div class="container">
                <h3 class="title is-3 has-text-centered mb-5">Search Auctions</h3>
                <div class="columns is-centered">
                    <div class="column is-10">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input class="input is-large" type="text" placeholder="Search by brand, type, or keyword...">
                            </div>
                            <div class="control">
                                <div class="select is-large">
                                    <select>
                                        <option>All Types</option>
                                        <option>Drivers</option>
                                        <option>Irons</option>
                                        <option>Putters</option>
                                        <option>Wedges</option>
                                        <option>Woods</option>
                                    </select>
                                </div>
                            </div>
                            <div class="control">
                                <button class="button is-primary is-large">
                                    <span class="icon">
                                        <i class="fas fa-search"></i>
                                    </span>
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Auctions Section -->
        <section class="section has-background-light">
            <div class="container">
                <h3 class="title is-3 has-text-centered mb-6">Featured Auctions</h3>
                <div class="columns is-multiline">
                    <!-- Auction Card 1 -->
                    <div class="column is-3">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="images/driver1.jpg" alt="TaylorMade Driver" onerror="this.src='https://bulma.io/images/placeholders/640x480.png'">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-5">TaylorMade R15 Driver</p>
                                <p class="subtitle is-6 has-text-grey">Excellent condition, 10.5° loft, regular flex shaft</p>
                                <div class="content">
                                    <div class="level is-mobile mb-3">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <span class="bid-price">Current Bid: $125</span>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <span class="time-remaining">
                                                    <i class="far fa-clock"></i> 2h 34m
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="button is-primary is-fullwidth" onclick="openBidModal('TaylorMade R15 Driver', 125)">
                                        <span class="icon">
                                            <i class="fas fa-gavel"></i>
                                        </span>
                                        <span>Place Bid</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Auction Card 2 -->
                    <div class="column is-3">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="images/putter1.jpg" alt="Scotty Cameron Putter" onerror="this.src='https://bulma.io/images/placeholders/640x480.png'">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-5">Scotty Cameron Newport 2</p>
                                <p class="subtitle is-6 has-text-grey">Classic blade putter, 34", minor wear</p>
                                <div class="content">
                                    <div class="level is-mobile mb-3">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <span class="bid-price">Current Bid: $280</span>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <span class="time-remaining">
                                                    <i class="far fa-clock"></i> 1d 5h
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="button is-primary is-fullwidth" onclick="openBidModal('Scotty Cameron Newport 2', 280)">
                                        <span class="icon">
                                            <i class="fas fa-gavel"></i>
                                        </span>
                                        <span>Place Bid</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Auction Card 3 -->
                    <div class="column is-3">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="images/irons1.jpg" alt="Callaway Iron Set" onerror="this.src='https://bulma.io/images/placeholders/640x480.png'">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-5">Callaway Apex Iron Set</p>
                                <p class="subtitle is-6 has-text-grey">5-PW, forged, great for low handicappers</p>
                                <div class="content">
                                    <div class="level is-mobile mb-3">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <span class="bid-price">Current Bid: $450</span>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <span class="time-remaining">
                                                    <i class="far fa-clock"></i> 3d 12h
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="button is-primary is-fullwidth" onclick="openBidModal('Callaway Apex Iron Set', 450)">
                                        <span class="icon">
                                            <i class="fas fa-gavel"></i>
                                        </span>
                                        <span>Place Bid</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Auction Card 4 -->
                    <div class="column is-3">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="images/wedge1.jpg" alt="Titleist Vokey Wedge" onerror="this.src='https://bulma.io/images/placeholders/640x480.png'">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-5">Titleist Vokey SM8 Wedge</p>
                                <p class="subtitle is-6 has-text-grey">56° sand wedge, M grind, lightly used</p>
                                <div class="content">
                                    <div class="level is-mobile mb-3">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <span class="bid-price">Current Bid: $85</span>
                                            </div>
                                        </div>
                                        <div class="level-right">
                                            <div class="level-item">
                                                <span class="time-remaining">
                                                    <i class="far fa-clock"></i> 18h
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="button is-primary is-fullwidth" onclick="openBidModal('Titleist Vokey SM8 Wedge', 85)">
                                        <span class="icon">
                                            <i class="fas fa-gavel"></i>
                                        </span>
                                        <span>Place Bid</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action Section -->
        <section class="section cta-section">
            <div class="container has-text-centered">
                <h3 class="title is-2 has-text-white">Ready to List Your Clubs?</h3>
                <p class="subtitle is-4 has-text-white mb-5">Join our community and start selling today</p>
                <button class="button is-light is-large">
                    <span class="icon">
                        <i class="fas fa-plus-circle"></i>
                    </span>
                    <span>Create Listing</span>
                </button>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-4">
                        <h4 class="title is-5 has-text-white">GolfClub Auctions</h4>
                        <p class="has-text-white-ter">The premier marketplace for golf equipment</p>
                    </div>
                    <div class="column is-4">
                        <h4 class="title is-5 has-text-white">Quick Links</h4>
                        <ul class="has-text-white-ter">
                            <li><a href="#" onclick="loadPage('home')" class="has-text-white-ter">Home</a></li>
                            <li><a href="#" onclick="loadPage('browse')" class="has-text-white-ter">Browse</a></li>
                            <li><a href="#" onclick="loadPage('about')" class="has-text-white-ter">About</a></li>
                            <li><a href="#" onclick="loadPage('contact')" class="has-text-white-ter">Contact</a></li>
                        </ul>
                    </div>
                    <div class="column is-4">
                        <h4 class="title is-5 has-text-white">Connect With Us</h4>
                        <div class="buttons">
                            <button class="button is-light">
                                <span class="icon">
                                    <i class="fab fa-facebook"></i>
                                </span>
                            </button>
                            <button class="button is-light">
                                <span class="icon">
                                    <i class="fab fa-twitter"></i>
                                </span>
                            </button>
                            <button class="button is-light">
                                <span class="icon">
                                    <i class="fab fa-instagram"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="has-background-white-ter">
                <div class="content has-text-centered has-text-white-ter">
                    <p>&copy; 2024 GolfClub Auctions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `,

    browse: `
        <section class="section">
            <div class="container">
                <h1 class="title is-2">Browse All Auctions</h1>
                <p class="subtitle">Discover amazing deals on quality golf clubs</p>

                <!-- Filter Controls -->
                <div class="box">
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Search</label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Search by brand or keyword...">
                                    <span class="icon is-left">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Club Type</label>
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select>
                                            <option>All Types</option>
                                            <option>Drivers</option>
                                            <option>Woods</option>
                                            <option>Irons</option>
                                            <option>Wedges</option>
                                            <option>Putters</option>
                                            <option>Complete Sets</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Price Range</label>
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select>
                                            <option>Any Price</option>
                                            <option>Under $100</option>
                                            <option>$100 - $250</option>
                                            <option>$250 - $500</option>
                                            <option>$500+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Sort By</label>
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select>
                                            <option>Ending Soon</option>
                                            <option>Newly Listed</option>
                                            <option>Price: Low to High</option>
                                            <option>Price: High to Low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <button class="button is-primary">
                            <span class="icon">
                                <i class="fas fa-filter"></i>
                            </span>
                            <span>Apply Filters</span>
                        </button>
                        <button class="button is-light">Clear</button>
                    </div>
                </div>

                <!-- Auction Grid -->
                <div class="columns is-multiline">
                    <div class="column is-12">
                        <p class="has-text-grey">Showing 24 of 156 auctions</p>
                    </div>
                    <!-- Repeat auction cards here (same structure as home page) -->
                    <div class="column is-3">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" alt="Golf Club">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-5">Ping G425 Driver</p>
                                <p class="subtitle is-6 has-text-grey">Like new, 9° loft, stiff flex</p>
                                <div class="content">
                                    <div class="level is-mobile mb-3">
                                        <div class="level-left">
                                            <span class="bid-price">Current Bid: $195</span>
                                        </div>
                                        <div class="level-right">
                                            <span class="time-remaining"><i class="far fa-clock"></i> 4h 22m</span>
                                        </div>
                                    </div>
                                    <button class="button is-primary is-fullwidth" onclick="openBidModal('Ping G425 Driver', 195)">
                                        <span class="icon"><i class="fas fa-gavel"></i></span>
                                        <span>Place Bid</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Add more cards as needed -->
                </div>

                <!-- Pagination -->
                <nav class="pagination is-centered mt-6" role="navigation" aria-label="pagination">
                    <a class="pagination-previous">Previous</a>
                    <a class="pagination-next">Next page</a>
                    <ul class="pagination-list">
                        <li><a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a></li>
                        <li><a class="pagination-link" aria-label="Goto page 2">2</a></li>
                        <li><a class="pagination-link" aria-label="Goto page 3">3</a></li>
                        <li><span class="pagination-ellipsis">&hellip;</span></li>
                        <li><a class="pagination-link" aria-label="Goto page 7">7</a></li>
                    </ul>
                </nav>
            </div>
        </section>

        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered has-text-white-ter">
                    <p>&copy; 2024 GolfClub Auctions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `,

    about: `
        <section class="section">
            <div class="container">
                <h1 class="title is-2">About GolfClub Auctions</h1>
                <div class="content is-medium">
                    <p class="is-size-5">
                        Welcome to GolfClub Auctions, the premier online marketplace dedicated exclusively to 
                        buying and selling used golf clubs. We've created a specialized platform where golf 
                        enthusiasts can find great deals on quality equipment and sellers can reach a dedicated 
                        audience of passionate golfers.
                    </p>

                    <h3 class="title is-4 mt-6">Our Mission</h3>
                    <p>
                        Our mission is to make golf more accessible and affordable by connecting buyers and 
                        sellers in a trusted, golf-focused marketplace. Unlike general auction sites, we provide 
                        a community-driven environment tailored specifically to the needs of golfers and collectors.
                    </p>

                    <h3 class="title is-4 mt-6">Why Choose Us?</h3>
                    <div class="columns mt-4">
                        <div class="column">
                            <div class="box has-text-centered">
                                <span class="icon is-large has-text-primary">
                                    <i class="fas fa-golf-ball fa-3x"></i>
                                </span>
                                <h4 class="title is-5 mt-3">Golf Specialized</h4>
                                <p>Exclusively focused on golf equipment, making it easy to find exactly what you need.</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box has-text-centered">
                                <span class="icon is-large has-text-primary">
                                    <i class="fas fa-users fa-3x"></i>
                                </span>
                                <h4 class="title is-5 mt-3">Community Driven</h4>
                                <p>Connect with fellow golfers who share your passion for the game.</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box has-text-centered">
                                <span class="icon is-large has-text-primary">
                                    <i class="fas fa-shield-alt fa-3x"></i>
                                </span>
                                <h4 class="title is-5 mt-3">Trusted Platform</h4>
                                <p>Secure transactions and verified sellers ensure a safe buying experience.</p>
                            </div>
                        </div>
                    </div>

                    <h3 class="title is-4 mt-6">Our Story</h3>
                    <p>
                        Founded by avid golfers who understood the challenges of finding quality used golf 
                        equipment, GolfClub Auctions was born from a simple idea: create a dedicated space 
                        where the golf community can buy and sell with confidence. Since our launch, we've 
                        helped thousands of golfers upgrade their equipment while staying within budget.
                    </p>

                    <div class="notification is-primary is-light mt-6">
                        <h4 class="title is-5">Join Our Community Today</h4>
                        <p>Whether you're looking to buy your first set of clubs or sell equipment you've outgrown, 
                        GolfClub Auctions is here to help. Sign up now and discover why we're the go-to 
                        marketplace for golf enthusiasts worldwide.</p>
                        <button class="button is-primary mt-3" onclick="openModal('signupModal')">Get Started</button>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered has-text-white-ter">
                    <p>&copy; 2024 GolfClub Auctions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `,

    contact: `
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title is-2">Contact Us</h1>
                        <p class="subtitle">We'd love to hear from you!</p>

                        <div class="box">
                            <form>
                                <div class="field">
                                    <label class="label">Name</label>
                                    <div class="control has-icons-left">
                                        <input class="input" type="text" placeholder="Your name" required>
                                        <span class="icon is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left">
                                        <input class="input" type="email" placeholder="your.email@example.com" required>
                                        <span class="icon is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Subject</label>
                                    <div class="control">
                                        <div class="select is-fullwidth">
                                            <select>
                                                <option>General Inquiry</option>
                                                <option>Technical Support</option>
                                                <option>Billing Question</option>
                                                <option>Report an Issue</option>
                                                <option>Partnership Opportunity</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Message</label>
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Tell us more..." rows="6" required></textarea>
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <button class="button is-primary is-fullwidth" type="submit">
                                            <span class="icon">
                                                <i class="fas fa-paper-plane"></i>
                                            </span>
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="columns is-mobile mt-5">
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-primary">
                                    <i class="fas fa-envelope fa-2x"></i>
                                </span>
                                <p class="has-text-weight-bold mt-2">Email</p>
                                <p class="has-text-grey">support@golfclubauctions.com</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-primary">
                                    <i class="fas fa-phone fa-2x"></i>
                                </span>
                                <p class="has-text-weight-bold mt-2">Phone</p>
                                <p class="has-text-grey">(555) 123-4567</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-primary">
                                    <i class="fas fa-map-marker-alt fa-2x"></i>
                                </span>
                                <p class="has-text-weight-bold mt-2">Location</p>
                                <p class="has-text-grey">Madison, WI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered has-text-white-ter">
                    <p>&copy; 2024 GolfClub Auctions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `
};

// Function to load different pages
function loadPage(pageName) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = pages[pageName] || pages.home;
    
    // Update active navigation link
    const navLinks = document.querySelectorAll('.navbar-item');
    navLinks.forEach(link => {
        link.classList.remove('is-active');
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Function to open modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('is-active');
    }
}

// Function to close modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('is-active');
    }
}

// Function to open bid modal with item details
function openBidModal(itemName, currentPrice) {
    document.getElementById('bidItemName').textContent = itemName;
    document.getElementById('bidCurrentPrice').textContent = '$' + currentPrice;
    openModal('bidModal');
}

// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', () => {
    // Load home page by default
    loadPage('home');

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });

    // Form submissions (prevent default for now, will be connected to Firebase later)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sign up functionality will be connected to Firebase in Milestone 3');
            closeModal('signupModal');
        });
    }

    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sign in functionality will be connected to Firebase in Milestone 3');
            closeModal('signinModal');
        });
    }

    const bidForm = document.getElementById('bidForm');
    if (bidForm) {
        bidForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Bid submission will be connected to Firebase in Milestone 3');
            closeModal('bidModal');
        });
    }

    // Close modal when clicking outside
    document.querySelectorAll('.modal-background').forEach(bg => {
        bg.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.remove('is-active');
            }
        });
    });
});
