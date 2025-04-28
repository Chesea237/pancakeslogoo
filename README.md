<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chopery - Delicious homemade meals delivered to your doorstep">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>Chopery - Homemade Delights</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="heading">
        <div class="logo">Chop<span>ery</span></div>

        <nav class="navtags">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#recipes">Recipes</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <div class="header-right">
            <div class="theme-toggle">
                <label class="switch">
                    <input type="checkbox" id="themeToggle">
                    <span class="slider round"></span>
                </label>
                <span id="themeLabel">Dark Mode</span>
            </div>

            <div class="search">
                <form action="" class="search-bar">
                    <input type="search" placeholder="Search food..." aria-label="Search food">
                    <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
                </form>
            </div>
            
            <button class="btn-cart"><i class="fas fa-shopping-cart"></i> <span class="cart-count">0</span></button>
        </div>
        
        <button class="hamburger" aria-label="Menu">
            <i class="fas fa-bars"></i>
        </button>
    </header>

    <main>
        <section class="hero" id="home">
            <div class="hero-content">
                <h1>Savor the Taste of <span>Homemade</span> Goodness</h1>
                <p>Authentic flavors crafted with love and fresh ingredients, delivered right to your doorstep.</p>
                <div class="hero-buttons">
                    <button class="btn-primary">Order Now</button>
                    <button class="btn-secondary">View Menu</button>
                </div>
            </div>
            <div class="hero-image">
                <img src="three.jpg" alt="Delicious homemade meal">
            </div>
        </section>

        <section class="popular-menu" id="menu">
            <div class="section-header">
                <h2>Our <span>Popular</span> Menu</h2>
                <p class="section-description">Discover our customer favorites, made with the freshest ingredients and traditional recipes.</p>
            </div>

            <div class="menu-grid">
                <div class="menu-item">
                    <div class="item-image">
                        <img src="one.jpg" alt="Eru dish">
                        <div class="item-badge">Bestseller</div>
                    </div>
                    <div class="item-details">
                        <h3>Eru Special</h3>
                        <p class="item-description">Aromatic Eru made with fresh <span>waterleaf</span> and premium smoked fish, served with cassava fufu.</p>
                        <div class="item-footer">
                            <span class="price">$8.99</span>
                            <button class="btn-order">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-image">
                        <img src="nine.jpg" alt="Ndole dish">
                        <div class="item-badge">Chef's Pick</div>
                    </div>
                    <div class="item-details">
                        <h3>Ndole Deluxe</h3>
                        <p class="item-description">Creamy Ndole with shrimp, beef, and roasted peanuts, paired with ripe plantains.</p>
                        <div class="item-footer">
                            <span class="price">$10.99</span>
                            <button class="btn-order">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-image">
                        <img src="five.jpg" alt="Jollof rice">
                        <div class="item-badge">Fan Favorite</div>
                    </div>
                    <div class="item-details">
                        <h3>Party Jollof</h3>
                        <p class="item-description">Authentic smokey jollof rice cooked with <span>fresh tomatoes</span> and aromatic spices.</p>
                        <div class="item-footer">
                            <span class="price">$7.99</span>
                            <button class="btn-order">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-image">
                        <img src="eleven.jpg" alt="Achu soup">
                    </div>
                    <div class="item-details">
                        <h3>Achu Traditional</h3>
                        <p class="item-description">Yellow soup with cocoyam paste, served with assorted meat and smoked fish.</p>
                        <div class="item-footer">
                            <span class="price">$9.99</span>
                            <button class="btn-order">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <button class="btn-view-all">View Full Menu</button>
        </section>

        <section class="testimonial-section">
            <div class="testimonial-content">
                <h2>From Our <span>Happy</span> Customers</h2>
                <div class="testimonials">
                    <div class="testimonial active">
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>"The Eru Special took me right back to my grandmother's kitchen! The flavors are authentic and the delivery was faster than expected."</p>
                        <div class="customer">
                            <img src="ten.jpg" alt="Customer">
                            <span>John M.</span>
                        </div>
                    </div>
                    <div class="testimonial">
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p>"I order from Chopery at least twice a week. Their portion sizes are generous and everything tastes homemade. The Ndole is my comfort food!"</p>
                        <div class="customer">
                            <img src="2bussiness men.jpg - Copy.jpg" alt="Customer">
                            <span>Amina B.</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-nav">
                    <button class="testimonial-prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="testimonial-next"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </section>

        <section class="about-chef" id="about">
            <div class="chef-image">
                <img src="female logo.png.jpg" alt="Chef Miss Ashu">
            </div>
            <div class="chef-content">
                <h2>Meet <span>Miss Ashu</span></h2>
                <p class="chef-quote">"My kitchen is my happy place, where tradition meets passion."</p>
                <p>With over 15 years of culinary experience, Miss Ashu brings authentic flavors from her grandmother's recipes to your table. Every dish is prepared with the same care and attention as if she were cooking for her own family.</p>
                <p>We understand that good food takes time. That's why each order is prepared fresh after you place it. While delivery times may vary by location, you can rest assured that your meal will arrive at its peak of freshness and flavor.</p>
                <button class="btn-primary">Read Full Story</button>
            </div>
        </section>

        <section class="newsletter">
            <div class="newsletter-content">
                <h2>Join Our <span>Foodie</span> Community</h2>
                <p>Subscribe to get weekly recipes, exclusive offers, and 10% off your first order!</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" required>
                    <button type="submit" class="btn-subscribe">Subscribe</button>
                </form>
            </div>
        </section>
    </main>

    <footer id="contact">
        <div class="footer-content">
            <div class="footer-section about">
                <div class="logo">Chop<span>ery</span></div>
                <p>Bringing authentic homemade flavors to your table since 2015. Our mission is to make traditional cooking accessible in today's busy world.</p>
                <div class="socials">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>

            <div class="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#shop">Shop Ingredients</a></li>
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
            </div>

            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p><i class="fas fa-map-marker-alt"></i> Tarred Malingo, Buea</p>
                <p><i class="fas fa-phone"></i> +237 6XX XXX XXX</p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:etegwechesea@gmail.com">hello@chopery.com</a></p>
                <p><i class="fas fa-clock"></i> Mon-Sat: 9AM - 8PM</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2023 Chopery. All rights reserved.</p>
            <div class="payment-methods">
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-paypal"></i>
                <i class="fab fa-cc-apple-pay"></i>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
