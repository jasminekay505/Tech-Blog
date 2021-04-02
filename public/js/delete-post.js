const deletePostHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

        // Send a POST request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ post_id: id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }

document
    .querySelector('.delete-post')
    .addEventListener('submit', deletePostHandler);
