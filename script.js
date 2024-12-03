// Sample project data
const projects = [
    { name: "Project 1", status: "Active", dueDate: "2023-10-30" },
    { name: "Project 2", status: "In Progress", dueDate: "2023-11-15" },
    { name: "Project 3", status: "Completed", dueDate: "2023-10-01" },
];

// Function to render projects
function renderProjects() {
    const projectsContainer = document.getElementById("projects");
    projectsContainer.innerHTML = ""; // Clear existing projects

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>Status: ${project.status}</p>
            <p>Due Date: ${project.dueDate}</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#projectModal" onclick="viewProjectDetails(${index})">View Details</button>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Function to view project details
function viewProjectDetails(projectIndex) {
    const project = projects[projectIndex];
    document.getElementById("modalProjectName").textContent = project.name;
    document.getElementById("modalProjectStatus").textContent = `Status: ${project.status}`;
    document.getElementById("modalProjectDueDate").textContent = `Due Date: ${project.dueDate}`;
}

// Function to add a new project
function addProject() {
    const projectNameInput = prompt("Enter project name:");
    const projectStatusInput = prompt("Enter project status:");
    const projectDueDateInput = prompt("Enter project due date:");

    if (projectNameInput && projectStatusInput && projectDueDateInput) {
        projects.push({
            name: projectNameInput,
            status: projectStatusInput,
            dueDate: projectDueDateInput,
        });
        renderProjects();
    }
}

// Initialize the dashboard
renderProjects();

// Add event listener to the "Add Project" button
document.getElementById("addProjectBtn").addEventListener("click", addProject);