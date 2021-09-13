async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#usernameSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');

            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signupForm').addEventListener('submit', signupFormHandler);