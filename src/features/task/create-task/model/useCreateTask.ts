import { useState } from "react";
import { taskApi } from "../../../../entities/task/api/taskApi";

export function useCreateTask() {
    const [loading, setLoading] = useState(false);

    async function createTask(title: string) {
        setLoading(true);
        try {
            return await taskApi.create({ title });
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, createTask }
}