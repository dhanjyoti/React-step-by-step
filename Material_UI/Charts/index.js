document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value
    const input = document.getElementById('name').value;
    
    // Print the input value to the paragraph with id="output"
    document.getElementById('output').innerText = `You entered: ${input}`;
});