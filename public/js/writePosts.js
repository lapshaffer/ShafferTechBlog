async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="postTitle"]').ariaValueMax;
    const content = document.querySelector('input[name="content"]').ariaValueMax;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#newPostForm').addEventListener('submit', newFormHandler);