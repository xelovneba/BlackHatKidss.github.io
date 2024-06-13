document.addEventListener('DOMContentLoaded', () => {
    // Function to generate a random number between min and max
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${random(0, window.innerWidth)}px`;
        snowflake.style.animationDuration = `${random(5, 15)}s`;
        snowflake.style.opacity = random(0.3, 1);
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 15000); // Remove snowflake after 15 seconds
    }

    // Function to create multiple snowflakes
    function createSnowflakes(count) {
        for (let i = 0; i < count; i++) {
            createSnowflake();
        }
    }

    // Generate snowflakes on page load
    createSnowflakes(20); // Adjust the number of snowflakes as needed
    setInterval(createSnowflake, 1000); // Create a new snowflake every second

    // Smooth scrolling code
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Get target ID without #
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
