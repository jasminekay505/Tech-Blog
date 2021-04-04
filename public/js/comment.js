//Add a new comment
const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the comment form
    const content = document.querySelector('textarea[name="comment-content"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // Send a POST request to the API endpoint
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the post page
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

//Delete comment
const deleteCommentHandler = async (event) => {
    event.preventDefault();

    // Collect values from the comment form
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // Send a DELTE request to the API endpoint
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ comment_id: id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the post page
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

//TO DO: add delete comment button
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
