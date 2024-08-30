document.addEventListener('DOMContentLoaded', function() {
    // Get all menu links
    const menuLinks = document.querySelectorAll('.menu-item a');
    
    // Add click event listener to each menu link
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Get the section ID to show
            const sectionId = this.id.replace('-link', '-section');
            
            // Hide all sections
            document.querySelectorAll('main section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show the clicked section
            document.getElementById(sectionId).classList.remove('hidden');
        });
    });
    
    // By default, show the home section
    document.getElementById('home-section').classList.remove('hidden');
});
