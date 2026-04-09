import { CreateTaskPanel } from "../../../widgets/create-task-panel/ui/CreateTaskPanel";

export function TasksPage() {
    const loadTasks = () => { }
    return (
        <div style={{ maxWidth: 720, margin: "0 auto", display: "grid", gap: 16 }}>
            <h1>Tasks</h1>
            <CreateTaskPanel onCreated={loadTasks} />
        </div>
    );
}