document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-item a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const sectionId = this.id.replace('-link', '-section');
            
            if (sectionId !== window.location.hash.replace('#', '')) {
                event.preventDefault();
            }

            document.querySelectorAll('main section').forEach(section => {
                section.classList.add('hidden');
            });

            const section = document.getElementById(sectionId);
            section.classList.remove('hidden');

            // Scroll to the top of the entire page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Check if there's a section ID in the URL hash
    const hash = window.location.hash;
    if (hash) {
        document.querySelectorAll('main section').forEach(section => {
            section.classList.add('hidden');
        });
        const section = document.querySelector(hash);
        if (section) {
            section.classList.remove('hidden');
            // Scroll to the top of the entire page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        document.getElementById('home-section').classList.remove('hidden');
    }
});
