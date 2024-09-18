document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Sample data
    const posts = [
        { id: 1, author: 'John Doe', content: 'Just got a new job at Google!', likes: 5, comments: 2 },
        { id: 2, author: 'Jane Smith', content: 'Looking for software engineering internships. Any leads?', likes: 3, comments: 1 },
    ];

    const internships = [
        { id: 1, company: 'Tech Corp', position: 'Software Engineering Intern', location: 'San Francisco, CA' },
        { id: 2, company: 'Startup Inc', position: 'Data Science Intern', location: 'New York, NY' },
    ];

    const events = [
        { id: 1, name: 'Annual Alumni Meetup', date: '2023-08-15', location: 'University Campus' },
        { id: 2, name: 'Tech Talk: AI in Industry', date: '2023-09-01', location: 'Online Webinar' },
    ];

    // Render posts
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'card';
        postElement.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${post.author}</h3>
            </div>
            <div class="card-content">
                <p>${post.content}</p>
            </div>
            <div class="card-footer">
                <button class="button">Like (${post.likes})</button>
                <button class="button">Comment (${post.comments})</button>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });

    // Render internships
    const internshipsContainer = document.getElementById('internships-container');
    internships.forEach(internship => {
        const internshipElement = document.createElement('div');
        internshipElement.className = 'card';
        internshipElement.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${internship.position}</h3>
                <p class="card-description">${internship.company}</p>
            </div>
            <div class="card-content">
                <p>${internship.location}</p>
            </div>
            <div class="card-footer">
                <button class="button">Apply Now</button>
            </div>
        `;
        internshipsContainer.appendChild(internshipElement);
    });

    // Render events
    const eventsContainer = document.getElementById('events-container');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'card';
        eventElement.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${event.name}</h3>
                <p class="card-description">${event.date}</p>
            </div>
            <div class="card-content">
                <p>${event.location}</p>
            </div>
            <div class="card-footer">
                <button class="button">Register</button>
            </div>
        `;
        eventsContainer.appendChild(eventElement);
    });
});