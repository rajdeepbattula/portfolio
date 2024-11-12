const techQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
  "Computers are like air conditioning - they become useless when you open windows. - Linus Torvalds",
  "The future is already here – it's just not very evenly distributed. - William Gibson",
  "Debugging is twice as hard as writing the code in the first place. - Brian Kernighan",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupéry",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The true sign of intelligence is not knowledge but imagination. - Albert Einstein"
];
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

// Slideshow functionality
class CertificationSlideshow {
    constructor(certifications) {
        this.certifications = certifications;
        this.currentIndex = 0;
        this.track = document.getElementById('certTrack');
        this.prevBtn = document.querySelector('.cert-prev-btn');
        this.nextBtn = document.querySelector('.cert-next-btn');

        this.renderCertifications();
        this.addEventListeners();
    }

    renderCertifications() {
        // Clear existing items
        this.track.innerHTML = '';

        // Render visible certifications
        const visibleCerts = this.getVisibleCertifications();
        visibleCerts.forEach(cert => {
            const certItem = document.createElement('div');
            certItem.className = 'cert-item';
            certItem.innerHTML = `
                <img src="${cert.logo}" alt="${cert.provider}" class="cert-logo">
                <h5>${cert.title}</h5>
                <p>${cert.provider}</p>
            `;
            this.track.appendChild(certItem);
        });

        // Add dots
        const dotsContainer = document.querySelector('.cert-dots');
        dotsContainer.innerHTML = '';
        this.certifications.forEach((cert, index) => {
            const dot = document.createElement('div');
            dot.className = 'cert-dot' + (index === this.currentIndex ? ' active' : '');
            dotsContainer.appendChild(dot);
        });
    }

    getVisibleCertifications() {
        const itemsToShow = window.innerWidth <= 768 ? 1 : 3;
        const startIndex = this.currentIndex;
        const endIndex = startIndex + itemsToShow;
        
        return this.certifications.slice(startIndex, endIndex);
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.showPrevious());
        this.nextBtn.addEventListener('click', () => this.showNext());

        // Responsive adjustment
        window.addEventListener('resize', () => this.renderCertifications());
    }

    showNext() {
        if (this.currentIndex + 3 < this.certifications.length) {
            this.currentIndex++;
            this.renderCertifications();
        }
    }

    showPrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderCertifications();
        }
    }
}

// Initialize Slideshow
document.addEventListener('DOMContentLoaded', () => {
    new CertificationSlideshow(certifications);
});
