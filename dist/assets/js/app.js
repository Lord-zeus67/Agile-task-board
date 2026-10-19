
// 1. Application Constants & Initial State Configuration
const APP_NAME = "Syntra Agile Task Board";
const API_VERSION = "v1.0.0";

// Mutable state tracking active filter and application counters
let activeWorkspaceFilter = "all";
let totalTasksRegistered = 2;

// 2. Initial Task Data Model (Array of Objects)
const initialTasksDatabase = [
  {
    id: 101,
    title: "Implement Auth Interceptor",
    category: "frontend",
    priority: "high",
    status: "todo",
    assignee: "Victory Basoene"
  },
  {
    id: 102,
    title: "Implement DB Stabilisation",
    category: "backend",
    priority: "medium",
    status: "todo",
    assignee: "Zeus Basoene"
  }
];

// 3. Diagnostic Initialization Logging using Console Tools
console.group(`%c🚀 ${APP_NAME} Initialized (${API_VERSION})`, "color: #2563eb; font-weight: bold; font-size: 14px;");
console.log(`Current Workspace Filter: ${activeWorkspaceFilter}`);
console.log(`Total Initial Tasks Loaded: ${totalTasksRegistered}`);
console.table(initialTasksDatabase);
console.groupEnd();

// 4. Task Validation Utility Function
function validateTaskInput(title, category, priority) {
  // Use strict inequality and data type checks
  if (typeof title !== "string" || title.trim().length === 0) {
    console.error("Validation Error: Task title must be a non-empty string.");
    return false;
  }

  if (title.trim().length < 3) {
    console.warn("Validation Warning: Task title is extremely short.");
  }

  const validCategories = ["frontend", "backend", "database", "devops"];
  if (!validCategories.includes(category)) {
    console.error(`Validation Error: Invalid category '${category}'.`);
    return false;
  }

  const validPriorities = ["low", "medium", "high"];
  if (!validPriorities.includes(priority)) {
    console.error(`Validation Error: Invalid priority '${priority}'.`);
    return false;
  }

  console.log("%c✓ Task Validation Passed Successfully!", "color: #10b981; font-weight: bold;");
  return true;
}

const testResult = validateTaskInput("Setup PostgreSQL DB", "database", "high");
console.log(`Test Validation Result: ${testResult}`);
      
function formatTaskSummary(taskObj) {

  const { title, category, priority, assignee } = taskObj;

  const formattedCategory = category.toUpperCase();
  const formattedPriority = priority.toUpperCase();

  return `[${formattedCategory}] ${title} (Priority: ${formattedPriority}) - Assigned to: ${assignee}`;
}

const summaryString = formatTaskSummary(initialTasksDatabase[0]);
console.log("%cTask Summary Output:", "color: #d97706; font-weight: bold;");
console.log(summaryString);

function createNewTaskObject(title, description, category, priority, assignee) {
    return {
        id: Date.now(),
        title: title,
        description: description,
        category: category,
        priority: priority,
        assignee: assignee,
        createdAt: new Date().toISOString(),
        status: "todo" 
    };
}

const task1 = createNewTaskObject(
    "Fix Login Bug",
    "Resolve the 401 unauthorised issue on the login endpoint.",
    "Development",
    "High",
    "Alex Rivera"
);

console.table(task1);