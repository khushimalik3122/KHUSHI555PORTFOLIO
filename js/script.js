
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('nav a');
        const pages = document.querySelectorAll('.page-section');

        function switchPage(hash) {
            // Default to about page if no hash or hash not found
            if (!hash) hash = '#about';
            
            let pageFound = false;

            // Show active page
            pages.forEach(page => {
                page.classList.remove('active');
                if ('#' + page.id === hash) {
                    page.classList.add('active');
                    pageFound = true;
                }
            });

            // Fallback if someone types a weird URL
            if(!pageFound) {
                document.getElementById('about').classList.add('active');
                hash = '#about';
            }

            // Update active link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === hash) {
                    link.classList.add('active');
                }
            });
            
            // Scroll to top when switching pages
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize routing on load
        switchPage(window.location.hash);

        // Listen for navigation clicks (Hash changes)
        window.addEventListener('hashchange', () => {
            switchPage(window.location.hash);
        });
    });
