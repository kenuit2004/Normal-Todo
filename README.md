# Interactive Task Manager

A simple and interactive Todo application built with React.js. This project allows users to add, delete, and filter tasks while demonstrating React Hooks, component-based architecture, and rendering optimization.

## 🚀 Live Demo

[View Live Application](https://normal-todo-one.vercel.app)

## 📌 Features

- **Add Tasks:** Create new tasks using a controlled input field.
- **Delete Tasks:** Remove tasks from the Todo list.
- **Filter Tasks:** Search tasks using case-insensitive text matching.
- **Dynamic Rendering:** Update the displayed task list when the application state changes.
- **Empty State:** Display a message when the Todo list is empty.
- **No-Match Message:** Display a message when no tasks match the search filter.
- **Component Memoization:** Use `React.memo` to help avoid unnecessary child component renders.
- **Optimized Filtering:** Use `useMemo` to cache filtered results until the task list or filter changes.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- Git and GitHub
- Vercel

## 📂 Project Structure

```text
Normal-Todo/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Git (optional, for cloning the repository)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/kenuit2004/Normal-Todo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Normal-Todo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🧠 React Concepts Demonstrated

- **useState:** Manage task input, task list, and filter input.
- **useMemo:** Memoize filtered task results.
- **React.memo:** Memoize the Todo list component.
- **Controlled Components:** Synchronize input fields with React state.
- **Props:** Pass task data and delete handlers to child components.
- **Functional State Updates:** Update the task list based on its previous state.
- **Array Methods:** Use `filter()` and `map()` to manage and display tasks.

## 🔮 Future Improvements

- Add CSS styling and responsive design.
- Implement task editing and completion status.
- Add local storage to persist tasks after refreshing the page.
- Improve input validation and prevent whitespace-only tasks.

## 👨‍💻 Author

**Kenuit M**

- GitHub: [kenuit2004](https://github.com/kenuit2004)
- LinkedIn: [kenuitm](https://linkedin.com/in/kenuitm)