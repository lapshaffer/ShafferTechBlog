async function commentFormHandler(event) {
    event.preventDefault();

    const commentText = document.querySelector('input[name="commentContent"]').value.trim();

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if (commentText) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentText
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
            document.querySelector('#commentForm').getElementsByClassName.display = "block";
        }
    }
};
document.querySelector('.commentForm').addEventListener('submit', commentFormHandler);