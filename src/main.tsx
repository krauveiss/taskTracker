import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TasksPage } from './pages/tasks-page/ui/TasksPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksPage />
  </StrictMode>,
)
