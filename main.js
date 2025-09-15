
// what kind of properties todo-items are going to have? 
// title of project/task, description of said project/task, dueDate, priority (urgent, low, medium)
// notes to add - anything to know about project/task, checklist of tasks for the project or what needs to be done
// add deadline for each task inside a project, when must it be done by? 
// add priority colors for projects and tasks 

// let's make the code for default project

//single responsibility principle: a project class should contain info
// about the project (name, priority, duedate) and todo list, nothing else

class Project {
    constructor(name, description, deadline, priority, checklist = [], notes) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.checklist = checklist;
        this.notes = notes;
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.deadline;
    }

    getChecklist() {
        return this.checklist;
    }

};

const defaultProject = new Project ('Default', 'First Project', new Date(), 'High', ['First Task', 'Second Task', 'Third Task'], '');
 // can change/toggle/implement anytime
console.log(defaultProject.getName());
console.log(defaultProject.getDate());
console.log(defaultProject.getChecklist());

function createNewProject() {
    //enter project
    //add project button on screen
    var btn = document.getElementById("new-project");

    btn.addEventListener("click", function() {
        const projectDashboard = document.createElement("div");
        projectDashboard.append(elements);
        document.querySelector("body").appendChild(projectDashboard);
    })
};

