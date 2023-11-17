// Make a GET request to the API
fetch('https://gorest.co.in/public/v2/users')
    .then(response => response.json())
    .then(data => {
        // Display the API response in the console
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
