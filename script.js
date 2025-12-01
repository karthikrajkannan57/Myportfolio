// FEATURE 1: Mobile Navigation Menu
// Select HTML elements
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// Add click event listener to hamburger button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the list to slide it in/out
    navList.classList.toggle('active');
});


// FEATURE 2: Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
    
    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});


// FEATURE 3: Dynamic Year & Form Alert
// Automatically update the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle Form Submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the page from reloading
    
    // Simple alert to show JS is working
    // In a real backend, you would send this data to a server
    alert("Thanks for your message! This is a demo form.");
    
    form.reset(); // Clear the inputs
});