let currentUser = null;

// Toggle between Registration and Login forms
document.getElementById('showLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('showRegister').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

// Registration Form Submission
document.getElementById('register').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert('Email already exists. Please login or use another email.');
    } else {
        // Add new user to localStorage
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        document.getElementById('register').reset();
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
});

// Login Form Submission
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        currentUser = { name: user.name, email: user.email };
        alert('Login successful!');
        document.getElementById('navbarName').textContent = `Welcome, ${user.name}`;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('addProductForm').style.display = 'block';
        loadProducts();
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Add Product Form Submission
document.getElementById('addProduct').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const category = document.getElementById('productCategory').value;
    const image = document.getElementById('productImage').value;

    // Add product to localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name, price, category, image });
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product added successfully!');
    document.getElementById('addProduct').reset();
    loadProducts();
});
// Logout
document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    location.reload();
});


// Load and Display Products
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h1>${product.name}</h1>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}