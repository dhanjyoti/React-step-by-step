function addTask(){
    //  `document.getElementById` is a method used to access and retrieve an HTML element from the current web page's Document Object Model (DOM) based on its unique id attribute. The id attribute should be assigned to a specific HTML element to make it easy to identify and manipulate using JavaScript.
    var taskText = document.getElementById("newTask").value;
    //  if the input field is empty
    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    //  `document.createElement` is a method used to create a new HTML element in the Document Object Model (DOM). This method allows us to dynamically generate HTML elements using JavaScript and then append them to the DOM. 
    var newTask = document.createElement("li");
    newTask.innerHTML = taskText;

    //  `addEventListener` method is used to register event listeners for specific events on HTML elements. An event listener is a function that "listens" for a particular event (e.g., a click, mouseover, keypress) and executes code when that event occurs. `addEventListener` is a key method for handling events and making web pages interactive. 
    newTask.addEventListener("click", function(){
        //  `removeChild` method is used to remove a specified child node from a parent element in the Document Object Model (DOM). This method is typically used when we want to remove or delete a specific element or node from an HTML document. 
        taskList.removeChild(newTask);
    });

    //  `appendChild` method is used to append a new child node to an existing parent element in the Document Object Model (DOM). This method allows us to add a new element or node as a child to an existing HTML element, effectively placing it at the end of the parent element's list of children.
    taskList.appendChild(newTask);
    document.getElementById("newTask").value = "";
}