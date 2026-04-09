import React, { useState } from 'react'
import { useCreateTask } from '../model/useCreateTask';


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
        <form onSubmit={onSubmit}>
            <input value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
            <button type='submit' disabled={loading}>Create Task</button>
        </form >
    )
}

export default CreateTaskForm