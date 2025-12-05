// FEATURE 1: Mobile Navigation Menu
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// 1. Toggle menu when hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// 2. CLOSE menu when a link is clicked 
// Select all links inside the nav-list
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'active' class so the menu slides away
        navList.classList.remove('active');
    });
});


// FEATURE 2: Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
// Select the wrapper so clicking the text OR button works
const toggleWrapper = document.querySelector('.toggle-wrapper'); 
const body = document.body;

toggleWrapper.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
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

