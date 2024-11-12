// Get the quote display element
const quoteDisplay = document.getElementById('quote-display');

// Function to display a random quote
function displayRandomQuote() {
  // Get a random quote from the array
  const randomIndex = Math.floor(Math.random() * techQuotes.length);
  const randomQuote = techQuotes[randomIndex];

  // Display the quote
  quoteDisplay.textContent = randomQuote;
}

// Call the function when the page loads
window.onload = displayRandomQuote;

document.addEventListener('DOMContentLoaded', function() {
    // Certification data
    const certifications = [
        {
            logo: "images/datacamp-logo.png",
            title: "Data Scientist Associate",
            provider: "DataCamp"
        },
        {
            logo: "images/datacamp-logo.png",
            title: "Data Engineer",
            provider: "DataCamp"
        },
        {
            logo: "images/datacamp-logo.png",
            title: "SQL Associate",
            provider: "DataCamp"
        },
        {
            logo: "images/datacamp-logo.png",
            title: "Data Engineer Associate",
            provider: "DataCamp"
        },
        {
            logo: "images/datacamp-logo.png",
            title: "Data Analyst Associate",
            provider: "DataCamp"
        },
        {
            logo: "images/microsoft-linkedin-logo.png",
            title: "Career Essentials in Project Management",
            provider: "Microsoft and LinkedIn"
        },
        {
            logo: "images/microsoft-linkedin-logo.png",
            title: "Career Essentials in Data Analysis",
            provider: "Microsoft and LinkedIn"
        },
        {
            logo: "images/hackerrank-logo.png",
            title: "Software Engineer",
            provider: "HackerRank"
        },
        {
            logo: "images/hackerrank-logo.png",
            title: "Frontend Developer",
            provider: "HackerRank"
        },
        {
            logo: "images/hackerrank-logo.png",
            title: "Problem Solving",
            provider: "HackerRank"
        },
        {
            logo: "images/hackerrank-logo.png",
            title: "SQL (Advanced)",
            provider: "HackerRank"
        },
        {
            logo: "images/project-management-institute-logo.png",
            title: "Project Management Foundations",
            provider: "Project Management Institute"
        },
        {
            logo: "images/infosys-logo.png",
            title: "Python for Data Science",
            provider: "Infosys"
        },
        {
            logo: "images/infosys-logo.png",
            title: "Essentials Of Cloud Computing",
            provider: "Infosys"
        },
        {
            logo: "images/linkedin-logo.png",
            title: "Learning the R Tidyverse",
            provider: "LinkedIn"
        },
        {
            logo: "images/linkedin-logo.png",
            title: "Introduction to Career Skills in Data Analytics",
            provider: "LinkedIn"
        },
        {
            logo: "images/linkedin-logo.png",
            title: "Data Analytics: Extending and Applying Core Knowledge",
            provider: "LinkedIn"
        },
        {
            logo: "images/linkedin-logo.png",
            title: "Data Analytics: Foundations",
            provider: "LinkedIn"
        },
        {
            logo: "images/project-management-institute-logo.png",
            title: "Managing Projects with Microsoft 365",
            provider: "Project Management Institute"
        },
        {
            logo: "images/project-management-institute-logo.png",
            title: "Managing Project Stakeholders",
            provider: "Project Management Institute"
        },
        {
            logo: "images/linkedin-logo.png",
            title: "Collaborating with Microsoft 365",
            provider: "LinkedIn"
        },
        {
            logo: "images/linkedin-logo.png",
            title: "Optimizing Your Work with Microsoft 365",
            provider: "LinkedIn"
        },
        {
            logo: "images/citi-program-logo.png",
            title: "Social/Behavioral Researchers",
            provider: "CITI Program"
        },
        {
            logo: "images/citi-program-logo.png",
            title: "Social and Behavioral Responsible Conduct of Research",
            provider: "CITI Program"
        }
    ];

    // Create certification items
    const track = document.querySelector('.cert-track');
    certifications.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'cert-item';
        certItem.innerHTML = `
            <img src="${cert.logo}" alt="${cert.provider}" class="cert-logo">
            <h5>${cert.title}</h5>
            <p>${cert.provider}</p>
        `;
        track.appendChild(certItem);
    });

    // Slideshow functionality
    let currentSlide = 0;
    const items = document.querySelectorAll('.cert-item');
    const dotsContainer = document.querySelector('.cert-dots');
    const itemsPerView = window.innerWidth <= 768 ? 1 : 3;
    const maxSlides = Math.ceil(items.length / itemsPerView);

    // Create dots
    for (let i = 0; i < maxSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'cert-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    function updateSlidePosition() {
        const itemWidth = items.offsetWidth + 20; // Including gap
        track.style.transform = `translateX(-${currentSlide * itemWidth * itemsPerView}px)`;
        
        // Update dots
        document.querySelectorAll('.cert-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlidePosition();
    }

    window.slideNext = function() {
        currentSlide = (currentSlide + 1) % maxSlides;
        updateSlidePosition();
    }

    window.slidePrev = function() {
        currentSlide = (currentSlide - 1 + maxSlides) % maxSlides;
        updateSlidePosition();
    }

    // Auto-slide
    let slideInterval = setInterval(slideNext, 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(slideInterval));
    track.addEventListener('mouseleave', () => {
        slideInterval = setInterval(slideNext, 5000);
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.touches.clientX;
    });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches.clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                slideNext();
            } else {
                slidePrev();
            }
        }
    }

    // Initial position
    updateSlidePosition();

    // Update on window resize
    window.addEventListener('resize', () => {
        const newItemsPerView = window.innerWidth <= 768 ? 1 : 3;
        if (newItemsPerView !== itemsPerView) {
            location.reload();
        }
    });
});
