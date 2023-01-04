import Axios from "axios";
import Path from "./Path";
Axios.defaults.baseURL = process.env.MIX_API_URL || 'https://todo-api-18-140-52-65.rakamin.com';
Axios.defaults.headers.post["Content-Type"] = Path.header.content_type;
Axios.defaults.headers.post["Accept"] = Path.header.accept;
Axios.defaults.headers["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODEyMDMzODV9.sM93-7A6ATwKvtcwldXbWxIhPyRtf8yAzju-QeRfmw8';

const Api = {
    auth: {
        login: (data) => {
            return Axios.post(Path.auth.login, data);
        },
        register: (data) => {
            return Axios.post(Path.auth.register, data);
        },
    },
    todo: {
        index: (params) => {
            return Axios.get(Path.todo.base, {
                params: params,
            });
        },
        store: (data) => {
            return Axios.post(Path.todo.base, data);
        },
        update: (id, data) => {
            return Axios.put(Path.todo.detail.replace("{id}", id), data);
        },
        destroy: (id) => {
            return Axios.delete(Path.todo.detail.replace("{id}", id));
        },
    },
    todo_item: {
        index: (parent_id, params) => {
            return Axios.get(Path.todo_item.base.replace("{parent_id}", parent_id), {
                params: params,
            });
        },
        store: (parent_id, data) => {
            return Axios.post(Path.todo_item.base.replace("{parent_id}", parent_id), data);
        },
        update: (parent_id, id, data) => {
            return Axios.patch(
                Path.todo_item.detail.replace("{parent_id}", parent_id).replace("{id}", id), data);
        },
        destroy: (parent_id, id) => {
            return Axios.delete(
                Path.todo_item.detail.replace("{parent_id}", parent_id).replace("{id}", id));
        },
    }
}

export default Api