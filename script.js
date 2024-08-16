document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded');
    const contactLink = document.getElementById('contact-link');
    const contactInfo = document.getElementById('contact-info');
    
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contactInfo.classList.toggle('hidden');
    });
});

