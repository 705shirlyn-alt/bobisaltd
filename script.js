// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Scroll Animations
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
fadeElements.forEach(el => observer.observe(el));

// Category Products Data
const categoryProducts = {
    'office': {
        title: 'Office Furniture',
        products: [
            {
                image: 'assets/office/1.jpeg'
            },
            {
                image: 'assets/office/2.jpeg'
            },
            {
                image: 'assets/office/3.jpeg'
            },
            
        ]
    },
    'partitions': {
        title: 'Demountable Partitions',
        products: [
            {
                image: 'assets/partitions/1.jpeg'
            },
            {
                image: 'assets/partitions/2.jpeg'
            },
            {
                image: 'assets/partitions/3.jpeg'
            }
        ]
    },
    'home': {
        title: 'Home Furniture',
        products: [
            {
                image: 'assets/home/1.jpeg'
            },
            {
                image: 'assets/home/2.jpeg'
            },
            {
                image: 'assets/home/3.jpeg'
            },
            
        ]
    },
    'institutional': {
        title: 'Institutional Furniture',
        products: [
            {
                image: 'assets/institutional/1.jpeg'
            },
            {
                image: 'assets/institutional/2.jpeg'
            },
            {
                image: 'assets/institutional/3.jpeg'
            },
            
        ]
    },
    'carpeting': {
        title: 'Carpeting',
        products: [
            {
                image: 'assets/carpeting/1.jpeg'
            },
            {
                image: 'assets/carpeting/2.jpeg'
            },
            {
                image: 'assets/carpeting/3.jpeg'
            },
            
        ]
    },
    'curtains': {
        title: 'Curtains & Blinds',
        products: [
            {
                image: 'assets/curtains/1.jpeg'
            },
            {
                image: 'assets/curtains/2.jpeg'
            },
            {
                image: 'assets/curtains/3.jpeg'
            },
            
        ]
    }
    // Add other categories as needed
};
// Category Modal
const category= document.getElementById('categoryModal');
const categoryModalTitle = document.getElementById('categoryModalTitle');
const categoryProductsGrid = document.getElementById('categoryProductsGrid');
const closeCategoryModal = categoryModal.querySelector('.close-modal');

// Add click events to category cards
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('h3').textContent.toLowerCase();
        let categoryKey = '';
        
        // Map category names to keys
        if (category.includes('office')) categoryKey = 'office';
        else if (category.includes('partition')) categoryKey = 'partitions';
        else if (category.includes('home')) categoryKey = 'home';
        else if (category.includes('institutional')) categoryKey = 'institutional';
        else if (category.includes('carpet')) categoryKey = 'carpeting';
        else if (category.includes('curtain') || category.includes('blind')) categoryKey = 'curtains';
        
        openCategoryModal(categoryKey);
    });
});

function openCategoryModal(categoryKey) {
    const category = categoryProducts[categoryKey];
    categoryModalTitle.textContent = category.title;
    categoryProductsGrid.innerHTML = '';
    
    category.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'category-product-card';
        productCard.innerHTML = `
            <div class="category-product-image">
                <img src="${product.image}" alt="${category.title}">
            </div>
        `;
        categoryProductsGrid.appendChild(productCard);
    });
    
    categoryModal.style.display = 'flex';
}

// Close category modal
closeCategoryModal.addEventListener('click', () => {
    categoryModal.style.display = 'none';
});

// Product Modal
const productModal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');
const viewDetailsButtons = document.querySelectorAll('.view-details');

// Product data
const products = {
    1: {
        title: 'Ergonomic Office Chair',
        description: 'Designed for all-day comfort with advanced lumbar support and multiple adjustment options. This chair promotes proper posture and reduces fatigue during long work hours.',
        image: 'assets/images/ergonomic office chair.jpeg',
        features: [
            'Adjustable seat height and depth',
            'Lumbar support with tension control',
            'Breathable mesh back',
            '360-degree swivel and smooth-rolling casters',
            'Reclines up to 135 degrees with lock function'
        ]
    },
    2: {
        title: 'Executive Desk',
        description: 'A minimalist executive desk with ample workspace and integrated cable management. Crafted from sustainable materials with a durable finish.',
        image: 'assets/images/executive desk.jpeg',
        features: [
            'Solid wood construction with eco-friendly finish',
            'Built-in cable management system',
            'Spacious work surface (60" x 30")',
            'Two integrated drawers with soft-close mechanism',
            'Adjustable leveling feet for uneven floors'
        ]
    },
    3: {
        title: 'Modular Sofa',
        description: 'Customizable modular sofa with premium fabric and comfortable cushions. Create your perfect configuration for any living space.',
        image: 'assets/images/modular sofa.jpeg',
        features: [
            'Modular design with multiple configuration options',
            'High-density foam cushions for lasting comfort',
            'Stain-resistant, premium fabric',
            'Solid wood frame with reinforced joints',
            'Available in multiple colors and fabric options'
        ]
    }
};

// Open modal when view details is clicked
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        const product = products[productId];
        
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalImage').src = product.image;
        
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        productModal.style.display = 'flex';
    });
});

// Close product modal
document.querySelector('#productModal .close-modal').addEventListener('click', () => {
    productModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === categoryModal) {
        categoryModal.style.display = 'none';
    }
    if (e.target === productModal) {
        productModal.style.display = 'none';
    }
});

// Form submission with email
const inquiryForm = document.getElementById('inquiryForm');
inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;
    
    // Create email content
    const subject = `New Furniture Inquiry - ${category}`;
    const body = `
New Inquiry from Bobisa Limited Website:

Name: ${name}
Email: ${email}
Phone: ${phone ? phone : 'Not provided'}
Product Category: ${category ? category : 'Not specified'}

Message:
${message}

---
Sent from Bobisa Limited Website
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:info@bobisa.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    alert('Your inquiry has been prepared. Please check your email client to send it to us.');
    inquiryForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
// PDF Catalogue functionality
const openPdfBtn = document.getElementById('openPdf');

if (openPdfBtn) {
    openPdfBtn.addEventListener('click', function() {
        // Try multiple possible PDF locations
        const pdfLocations = [
            'catalogue.pdf',
            './catalogue.pdf',
            'assets/catalogue.pdf',
            'pdf/catalogue.pdf',
            'documents/catalogue.pdf'
        ];
        
        let pdfOpened = false;
        
        // Try each location
        for (const pdfUrl of pdfLocations) {
            try {
                const testWindow = window.open(pdfUrl, '_blank');
                if (testWindow && !testWindow.closed) {
                    pdfOpened = true;
                    console.log('PDF opened from:', pdfUrl);
                    break;
                }
            } catch (error) {
                console.log('Failed to open from:', pdfUrl, error);
                continue;
            }
        }
        
        // If no PDF opened, show error message
        if (!pdfOpened) {
            alert('Catalogue PDF not found. Please ensure the "catalogue.pdf" file is in the same folder as your website files, or contact us for the catalogue.');
        }
    });
}