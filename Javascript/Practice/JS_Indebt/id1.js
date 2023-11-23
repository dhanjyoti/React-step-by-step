// Make a GET request to the API
fetch('https://gorest.co.in/public/v2/users')
.then(response => response.json())
.then(data => {
    document.getElementById("apiResponse").textContent = JSON.stringify(data, null, 2)
})
.catch(error => console.error("Error: ", error))