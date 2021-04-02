const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the comment form
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    if (comment_content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);