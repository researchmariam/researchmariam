document.addEventListener('DOMContentLoaded', function() {
    // Handle menu navigation
    const menuLinks = document.querySelectorAll('.menu-item a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const sectionId = this.id.replace('-link', '-section');

            if (sectionId !== window.location.hash.replace('#', '')) {
                event.preventDefault();
            }

            // Hide all sections
            document.querySelectorAll('main section').forEach(section => {
                section.classList.add('hidden');
            });

            // Show the selected section
            const section = document.getElementById(sectionId);
            section.classList.remove('hidden');

            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Check if a section ID exists in the URL hash
    const hash = window.location.hash;
    if (hash) {
        document.querySelectorAll('main section').forEach(section => {
            section.classList.add('hidden');
        });
        const section = document.querySelector(hash);
        if (section) {
            section.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        const homeSection = document.getElementById('home-section');
        if (homeSection) {
            homeSection.classList.remove('hidden');
        }
    }

    // Adjust text size based on the select dropdown
    const textSize = document.getElementById('textSize');
    textSize.addEventListener('change', function() {
        // Apply the chosen font size to the entire document
        document.body.style.fontSize = this.value + 'px';
    });

    // Toggle high contrast mode
    const contrastToggle = document.getElementById('contrastToggle');
    contrastToggle.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');

        // Also toggle high contrast for any sections, articles, etc.
        const allContent = document.querySelectorAll('main, header, footer, section, .full-article, .article-content, .news-article, .menu-item a');
        allContent.forEach(content => {
            content.classList.toggle('high-contrast');
        });
    });

    // Make sure the font size and contrast mode are consistent across pages
    const currentTextSize = localStorage.getItem('textSize');
    const highContrastEnabled = localStorage.getItem('highContrast');

    // Apply saved text size
    if (currentTextSize) {
        document.body.style.fontSize = currentTextSize + 'px';
        textSize.value = currentTextSize; // Update the select dropdown value
    }

    // Apply saved high contrast setting
    if (highContrastEnabled === 'true') {
        document.body.classList.add('high-contrast');
    }

    // Save user preferences to localStorage for persistent settings across pages
    textSize.addEventListener('change', function() {
        localStorage.setItem('textSize', this.value); // Save the selected font size
    });

    contrastToggle.addEventListener('click', function() {
        const isHighContrast = document.body.classList.contains('high-contrast');
        localStorage.setItem('highContrast', isHighContrast); // Save the high contrast setting
    });
    document.addEventListener('DOMContentLoaded', function() {
        const contrastToggle = document.getElementById('contrastToggle');
        
        // Toggle high contrast mode
        contrastToggle.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
    
            // Save high contrast setting in localStorage for persistence
            const isHighContrast = document.body.classList.contains('high-contrast');
            localStorage.setItem('highContrast', isHighContrast); // Save the high contrast setting
        });
    
        // Apply saved high contrast setting on page load
        const highContrastEnabled = localStorage.getItem('highContrast');
        if (highContrastEnabled === 'true') {
            document.body.classList.add('high-contrast');
        }
    });
    
});
