# ccp_react_d02_q12
## Advanced Task Manager with Prioritization

### Problem Statement

Build an advanced task manager application with the following features:

- Users can add tasks with a title and priority (High, Medium, Low).
- Tasks are displayed in a list sorted by priority (High to Low).
- Users can:
  - Mark tasks as complete/incomplete.
  - Delete tasks from the list.
- Include filters to display tasks based on:
  - Priority (High, Medium, Low)
  - Completion status (All, Completed, Incomplete)
- Visually highlight high-priority tasks for better clarity.

### Implementation Details

#### State Management

- Used `useState` to manage:
  - List of tasks.
  - Input values for task title and priority.
  - Filter values for priority and completion status.

#### Sorting

- Tasks are sorted dynamically by priority whenever a new task is added or updated.
- A `priorityOrder` mapping object was used to define sorting order (High → Medium → Low).

#### Filtering

- Combined filters for priority and completion status to display the desired subset of tasks.

#### Task Operations

- **Add Task**: Allows users to enter a title and choose a priority before adding a new task.
- **Toggle Completion**: Users can mark tasks as complete or incomplete using a checkbox.
- **Delete Task**: Tasks can be removed from the list.

#### UI

- High-priority tasks are visually highlighted using a distinct background color.
- Basic styling is done using Tailwind CSS classes (can be replaced or customized).

### Code Summary

- The component is implemented as a single functional component using React.
- State updates follow best practices and maintain immutability.
- Tasks are always kept sorted and reflect updates immediately.

### How to Run

1. Create a new React project (e.g., using Create React App or Vite).
2. Add the provided `TaskManager.jsx` component to your project.
3. Import and render it in `App.js`:

```jsx
import TaskManager from './TaskManager';

function App() {
  return (
    <div>
      <TaskManager />
    </div>
  );
}

export default App;
