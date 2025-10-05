```markdown
# To-Do App (React + TypeScript)

A simple and elegant to-do application built with React and TypeScript.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Clean, responsive UI
- ✅ Type-safe with TypeScript

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS/Tailwind CSS (to be implemented)

## Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone and setup**:
   ```bash
   npm create vite@latest todo-app -- --template react-ts
   cd todo-app
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5173` to view the app.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # React components
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Next Steps

- [ ] Implement full CRUD functionality
- [ ] Add Tailwind CSS for styling
- [ ] Polish UI for portfolio presentation
- [ ] Add local storage persistence

## License

MIT
