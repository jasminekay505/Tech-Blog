//Add a comment
const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment_content = document.querySelector('#comment-content').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_content && post_id) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentHandler);