import React, { useState } from 'react'
import { useCreateTask } from '../model/useCreateTask';
import { Button } from '../../../../shared/ui/Button';


type Props = {
    onCreated: () => void;
}

const CreateTaskForm = ({ onCreated }: Props) => {
    const [title, setTitle] = useState('');
    const { loading, createTask } = useCreateTask();

    async function onSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        if (!title.trim()) {
            return
        }

        try {
            await createTask(title.trim());
        }
        catch (e) {
            console.log(e)
        }
        setTitle("");
        onCreated();
    }

    return (
        <form onSubmit={onSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
            <input value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
            <Button type='submit' disabled={loading}>Create Task</Button>
        </form >
    )
}

export default CreateTaskForm