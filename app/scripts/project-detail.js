// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Function to load project data
function loadProjectData() {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) {
        window.location.href = '../index.html';
        return;
    }

    // Update page title
    document.title = `${project.title} - Portfolio`;

    // Update project overview
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-type').textContent = project.type;
    document.getElementById('project-industry').textContent = project.industry;
    document.getElementById('project-date').textContent = `Completed: ${project.completedDate}`;

    // Update project links
    const demoLink = document.getElementById('demo-link');
    const githubLink = document.getElementById('github-link');
    if (demoLink) demoLink.href = project.demoUrl;
    if (githubLink) githubLink.href = project.githubUrl;

    // Load screenshots into carousel
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    
    if (carouselInner && project.screenshots && project.screenshots.length > 0) {
        carouselInner.innerHTML = ''; // Clear existing content
        carouselIndicators.innerHTML = ''; // Clear existing indicators
        
        project.screenshots.forEach((screenshot, index) => {
            // Create carousel item
            const item = document.createElement('div');
            item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            // Create image container
            const imgContainer = document.createElement('div');
            imgContainer.className = 'carousel-image-container';
            
            // Create image element
            const img = document.createElement('img');
            img.src = screenshot;
            img.className = 'd-block w-100';
            img.alt = `Project Screenshot ${index + 1}`;
            
            // Append elements
            imgContainer.appendChild(img);
            item.appendChild(imgContainer);
            carouselInner.appendChild(item);
            
            // Create indicator
            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.setAttribute('data-bs-target', '#projectCarousel');
            indicator.setAttribute('data-bs-slide-to', index.toString());
            if (index === 0) {
                indicator.className = 'active';
                indicator.setAttribute('aria-current', 'true');
            }
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            carouselIndicators.appendChild(indicator);
        });

        // Initialize Bootstrap Carousel
        new bootstrap.Carousel(document.getElementById('projectCarousel'), {
            interval: 5000, // Change slides every 5 seconds
            wrap: true, // Continuous loop
            keyboard: true // Keyboard control
        });
    }

    // Load features
    const featuresList = document.getElementById('features-list');
    if (featuresList && project.features) {
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check text-success me-2"></i>${feature}`;
            featuresList.appendChild(li);
        });
    }

    // Load technologies
    const techStack = document.getElementById('tech-stack');
    if (techStack && project.technologies) {
        techStack.innerHTML = '';
        project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            techStack.appendChild(tag);
        });
    }

    // Load development approach
    const approachElement = document.getElementById('development-approach');
    if (approachElement) {
        approachElement.textContent = project.approach || 'Project approach details coming soon.';
    }

    // Load challenges
    const challengesContainer = document.getElementById('challenges-container');
    if (challengesContainer && project.challenges) {
        challengesContainer.innerHTML = '';
        project.challenges.forEach(challenge => {
            const challengeDiv = document.createElement('div');
            challengeDiv.className = 'challenge-item';
            challengeDiv.innerHTML = `
                <h4>${challenge.title}</h4>
                <p>${challenge.description}</p>
                <div class="solution">
                    <strong>Solution:</strong> ${challenge.solution}
                </div>
            `;
            challengesContainer.appendChild(challengeDiv);
        });
    }

    // Load role and contributions
    const roleElement = document.getElementById('project-role');
    if (roleElement) {
        roleElement.textContent = project.role || 'Role details coming soon.';
    }

    const contributionsList = document.getElementById('contributions-list');
    if (contributionsList && project.contributions) {
        contributionsList.innerHTML = '';
        project.contributions.forEach(contribution => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-star text-warning me-2"></i>${contribution}`;
            contributionsList.appendChild(li);
        });
    }
}

// Load project data when the page loads
document.addEventListener('DOMContentLoaded', loadProjectData); 