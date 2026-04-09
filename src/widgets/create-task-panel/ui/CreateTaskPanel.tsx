
import { Card } from '../../../shared/ui/Card'
import CreateTaskForm from '../../../features/task/create-task/ui/CreateTaskForm'

export const CreateTaskPanel = ({ onCreated }: { onCreated: () => void }) => {

    return (
        <Card>
            <CreateTaskForm onCreated={onCreated}></CreateTaskForm>
        </Card>
    )
}
