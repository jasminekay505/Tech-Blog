//Add a new post
const addPostHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.new-post').addEventListener('submit', addPostHandler);


//Update a post


//Delete a post

const delButtonHandler = async (event) => {
    const id = event.target.getAttribute('delete-data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }

};


document
    .querySelector('#delete-button')
    .addEventListener('click', delButtonHandler);