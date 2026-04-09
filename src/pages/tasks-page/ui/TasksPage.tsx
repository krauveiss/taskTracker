import { CreateTaskPanel } from "../../../widgets/create-task-panel/ui/CreateTaskPanel";

export function TasksPage() {
    const loadTasks = () => { }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh' }}>
            <CreateTaskPanel onCreated={loadTasks} />
        </div>
    );
}