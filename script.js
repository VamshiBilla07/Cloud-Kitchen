let cart = [];
        let cartTotal = 0;

        // Show Alert
        function showAlert(message) {
            const alertBox = document.getElementById('alertBox');
            alertBox.textContent = message;
            alertBox.style.display = 'block';
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 3000);
        }

        // Add to Cart
        function addToCart(itemName, price) {
            cart.push({ name: itemName, price: price });
            cartTotal += price;
            updateCart();
            showAlert(`Added ${itemName} to cart! Total items: ${cart.length}`);
        }

        // Update Cart Display
        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
                cartItems.appendChild(div);
            });
            document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
        }

        // Process Payment
        function processPayment() {
            if (cart.length === 0) {
                showAlert('Your cart is empty!');
                return;
            }
            const paymentMethod = document.getElementById('paymentMethod').value;
            const orderStatus = document.getElementById('orderStatus');
            const orderMessage = document.getElementById('orderMessage');
            
            orderStatus.style.display = 'block';
            orderMessage.textContent = `Your order has been placed! Thank you for your order. Payment processed via ${paymentMethod}.`;
            showAlert('Payment successful! Thanks for your order!');
            
            // Reset cart
            cart = [];
            cartTotal = 0;
            updateCart();
        }

        // Modal Controls
        document.getElementById('loginBtn').onclick = () => openModal('loginModal');
        document.getElementById('signupBtn').onclick = () => openModal('signupModal');
        document.getElementById('trackOrderBtn').onclick = () => openModal('trackOrderModal');

        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Login Function
        function login() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            if (email && password) {
                showAlert('Login successful!');
                closeModal('loginModal');
            } else {
                showAlert('Please fill in all fields');
            }
        }

        // Signup Function
        function signup() {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            if (name && email && password) {
                showAlert('Sign up successful!');
                closeModal('signupModal');
            } else {
                showAlert('Please fill in all fields');
            }
        }

        // Track Order Function
        function trackOrder() {
            const orderId = document.getElementById('orderId').value;
            if (orderId) {
                showAlert(`Tracking order ${orderId}: In transit`);
                closeModal('trackOrderModal');
            } else {
                showAlert('Please enter an order ID');
            }
        }