// array to store tasks
let tasksArray = [];


class Task {
    constructor(description, completed = false) {
        this.description = description;
        this.completed = completed;
    }

    setCompleted() {
        this.completed = true;
    }

    setIncomplete() {
        this.completed = false;
    }

    infoTask() {
        return  ` Description: ${this.description}, Completed: ${this.completed} `;
    }
}

// Funtion to create a task
function createTask(description) {
    const newTask = new Task(description);
    tasksArray.push(newTask);
    return newTask;
}

// Funtion to complete a task
function completeTask(task) {
    // Save in foundTask the task strictly equal
    const foundTask = tasksArray.find(t => t === task);
    if (foundTask) {
        foundTask.setCompleted();
    } else {
        console.log("Task not found.");
    }
}

// Funtion to remove a task 
function deleteTask(task) {
    // Find the position of an element in the array 
    const index = tasksArray.indexOf(task);
    if (index > -1) {
        // Delete task 
        tasksArray.splice(index, 1);
    } else {
        console.log("Task not found.");
    }
}

// Function to print all tasks
function printAllTasks() {
    if (tasksArray.length === 0) {
        console.log("No tasks available.");
        return;
    }
    
    console.log("All tasks:");
    tasksArray.forEach(task => {
        console.log(task.infoTask());
    });
}


printAllTasks();

const myTask1 = createTask("Learn JavaScript");
const myTask2 = createTask("Cook dinner"); 
const myTask3 = createTask("Do the laundry");


console.log("\n");
printAllTasks();


completeTask(myTask2);

console.log("\n");
printAllTasks();

deleteTask(myTask3);
console.log("\n");
printAllTasks();


