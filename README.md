# TaskFlow ✅  

A task management application built with **React** that allows users to sign up, log in, and manage their tasks efficiently. The app leverages modern React concepts such as **Context API**, **Custom Hooks**, and **TanStack Query (React Query)** for state and data management.  

---

## 🚀 Features  

- **Authentication System**  
  - User sign-up and login functionality.  
  - Token-based authentication handled through `AuthContext`.  
  - Persisted user session across components.  

- **Task Management**  
  - Fetch all tasks from API (`get-all`).  
  - Create, update, delete tasks with API mutations.  
  - Data synchronization between UI and backend using **React Query**.  

- **Custom Hooks**  
  - `useTasks`: Fetches all tasks using `useQuery` with `queryKey = ["tasks"]`.  
  - Automatically transforms API responses using the `select` option.  
  - Provides cleaner and reusable code for components consuming tasks.  

- **Context API**  
  - `AuthContext`: Manages user authentication state and stores the token.  
  - Accessible across the entire app without prop drilling.  
  - Integrated with API requests for secure endpoints.  

- **React Query (TanStack Query)**  
  - Used for data fetching, caching, and synchronization.  
  - Eliminates the need for manual state management of API calls.  
  - Provides automatic refetching after mutations (e.g., when adding or deleting tasks).  
  - Loading and error states are handled out-of-the-box.  

- **Code Splitting & Organization**  
  - Reusable **components** for tasks and actions.  
  - **Hooks** folder for all custom hooks.  
  - **Context** folder for authentication logic.  
  - API requests organized with Axios.  

---

## 🛠️ Tech Stack  

- **React 18**  
- **React Router** – navigation between pages  
- **TanStack Query (React Query)** – data fetching and caching  
- **Context API** – authentication state management  
- **Axios** – HTTP requests  
- **Tailwind CSS / shadcn/ui** – UI styling and responsive design  

---

## 📂 Folder Structure  

TaskFlow/
├── src/
│ ├── Components/ # Reusable UI components
│ ├── Context/ # AuthContext for managing authentication
│ ├── Hooks/ # Custom hooks (e.g., useTasks.js)
│ ├── Pages/ # Main app pages (Login, Register, Tasks, etc.)
│ ├── App.js # Root component with routes
│ ├── main.jsx # React DOM entry point
│ └── index.css # Global styles

markdown
Copy
Edit

---

## ⚡ Concepts Applied  

1. **Authentication Flow**  
   - Implemented with Context API (`AuthContext`).  
   - Provides `token` globally for all requests.  

2. **Custom Hooks**  
   - Example: `useTasks` to encapsulate fetching logic.  
   - Keeps components clean and separates concerns.  

3. **React Query**  
   - Fetch tasks with `useQuery`.  
   - Mutations for add/update/delete tasks.  
   - Auto-refetching ensures UI always shows latest data.  

4. **Error & Loading Handling**  
   - Built-in React Query states (`isLoading`, `isError`).  
   - User-friendly messages during API calls.  

5. **Reusable Components**  
   - Task lists, buttons, and forms are modular and reusable.  

---

## 🔑 How to Run the Project  

1. Clone the repository:  
   ```bash
   git clone https://github.com/maryammagdy123/TaskFlow.git
   cd TaskFlow
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Open in browser:

arduino
Copy
Edit
http://localhost:5173
📌 Future Improvements
Add task categories / tags.

Implement search & filter for tasks.

Dark mode toggle.

Enhance UI with animations (Framer Motion).

👩‍💻 Author
Developed with ❤️ by Maryam Magdy
