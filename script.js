// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbar-list');

if (menuToggle && navbarList) {
    menuToggle.addEventListener('click', () => {
        navbarList.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = navbarList.querySelectorAll('li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarList.classList.remove('active');
        });
    });
}

// Petition form handling
const petitionForm = document.getElementById('petition-form');
const signatureList = document.getElementById('signature-list');
const signatureCount = document.getElementById('signature-count');
let totalSignatures = 0;

if (petitionForm) {
    petitionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const cityInput = document.getElementById('city');

        let isValid = true;

        // Validate inputs
        isValid = validateInput(nameInput) && isValid;
        isValid = validateEmail(emailInput) && isValid;
        isValid = validateInput(cityInput) && isValid;

        // Add valid signature to the list
        if (isValid && signatureList) {
            const listItem = document.createElement('li');
            listItem.textContent = `${nameInput.value} - ${cityInput.value}`;
            signatureList.appendChild(listItem);

            // Update signature count
            if (signatureCount) {
                totalSignatures++;
                signatureCount.textContent = totalSignatures;
            }

            // Clear form fields
            petitionForm.reset();
        }
    });
}

function validateInput(input) {
    if (input.value.trim() === '') {
        setInvalid(input);
        return false;
    } else {
        setValid(input);
        return true;
    }
}

function validateEmail(input) {
    if (!isValidEmail(input.value)) {
        setInvalid(input);
        return false;
    } else {
        setValid(input);
        return true;
    }
}

function setInvalid(input) {
    input.parentElement.classList.add('invalid');
}

function setValid(input) {
    input.parentElement.classList.remove('invalid');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your contact form submission logic here
        console.log('Contact form submitted');
    });
}

// Mode toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

if (modeToggle && body) {
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        updateModeToggle();
    });

    function updateModeToggle() {
        const isDarkMode = body.classList.contains('dark-mode');
        const icon = modeToggle.querySelector('i');
        const text = modeToggle.querySelector('span');

        if (icon && text) {
            if (isDarkMode) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                text.textContent = 'Dark Mode';
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                text.textContent = 'Light Mode';
            }
        }
    }

    // Initialize the toggle button state
    updateModeToggle();
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbar-list');

if (menuToggle && navbarList) {
    menuToggle.addEventListener('click', () => {
        navbarList.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = navbarList.querySelectorAll('li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarList.classList.remove('active');
        });
    });
}

// Scrolling animation
let isReducedMotion = false;
const reduceMotionBtn = document.getElementById('reduce-motion');

function handleScrollAnimation() {
    if (isReducedMotion) return;

    const sections = document.querySelectorAll('main > *');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

// Reduce motion button
if (reduceMotionBtn) {
    reduceMotionBtn.addEventListener('click', () => {
        isReducedMotion = !isReducedMotion;
        if (isReducedMotion) {
            document.querySelectorAll('.hidden, .visible').forEach(el => {
                el.classList.remove('hidden', 'visible');
            });
            reduceMotionBtn.textContent = 'Enable Motion';
        } else {
            handleScrollAnimation();
            reduceMotionBtn.textContent = 'Reduce Motion';
        }
    });
}

// Petition form handling
const petitionForm = document.getElementById('petition-form');
const signatureList = document.getElementById('signature-list');
const signatureCount = document.getElementById('signature-count');
let totalSignatures = 0;

if (petitionForm) {
    petitionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const cityInput = document.getElementById('city');

        let isValid = true;

        // Validate inputs
        isValid = validateInput(nameInput) && isValid;
        isValid = validateEmail(emailInput) && isValid;
        isValid = validateInput(cityInput) && isValid;

        // Add valid signature to the list and show modal
        if (isValid) {
            if (signatureList) {
                const listItem = document.createElement('li');
                listItem.textContent = `${nameInput.value} - ${cityInput.value}`;
                signatureList.appendChild(listItem);

                // Update signature count
                if (signatureCount) {
                    totalSignatures++;
                    signatureCount.textContent = totalSignatures;
                }
            }

            // Show modal
            showModal(nameInput.value, emailInput.value, cityInput.value);

            // Clear form fields
            petitionForm.reset();
        }
    });
}

function showModal(name, email, city) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="mental_health.png" alt="Thank you" class="modal-image">
            <h2>Thank you, ${name}!</h2>
            <p>Your support from ${city} means a lot to us.</p>
            <p>We'll keep you updated at ${email}.</p>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Image animation
    const modalImage = modal.querySelector('.modal-image');
    setTimeout(() => {
        modalImage.style.transform = 'rotate(360deg) scale(1.2)';
    }, 100);

    // Close button
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    };

    // Auto-close after 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    }, 5000);
}
