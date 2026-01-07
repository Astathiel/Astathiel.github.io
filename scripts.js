document.addEventListener('DOMContentLoaded', () => {

    console.log("Welcome to Leo Haanpää's Portfolio!");

    // Project Card Animation (Staggered Fade-in)
    const cards = document.querySelectorAll('.project-card');
    
    // Loop through cards and animate them
    cards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Skills Chart using Chart.js
    const ctx = document.getElementById('skillsChart').getContext('2d');
    
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {

            labels: ['Python', 'JavaScript', 'Git', 'SQL', 'Data Analytics', 'C#'],
            datasets: [{
                label: 'Proficiency Level (1-5)',
                data: [4, 4, 4, 2, 2, 1], 
                backgroundColor: [
                    'rgba(0, 123, 255, 0.7)',
                    'rgba(0, 123, 255, 0.7)',
                    'rgba(0, 123, 255, 0.7)',
                    'rgba(108, 117, 125, 0.7)',
                    'rgba(108, 117, 125, 0.7)',
                    'rgba(108, 117, 125, 0.7)'
                ],
                borderColor: [
                    'rgba(0, 123, 255, 1)',
                    'rgba(0, 123, 255, 1)',
                    'rgba(0, 123, 255, 1)',
                    'rgba(108, 117, 125, 1)',
                    'rgba(108, 117, 125, 1)',
                    'rgba(108, 117, 125, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});