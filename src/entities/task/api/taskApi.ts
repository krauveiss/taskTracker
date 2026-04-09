import { http } from "../../../shared/api/http";
import type { Task, CreateTaskInput } from "../model/types";
import type { ITaskApi } from "./ItaskApi";

export const taskApi: ITaskApi = {
    getList() {
        return http.get<Task[]>('/api/tasks');
    },
    create(input: CreateTaskInput) {
        return http.post<Task>("/api/tasks", input);
    },
    toggle(id: string) {
        return http.patch<Task>(`/api/tasks/${id}/toggle`);
    }

}