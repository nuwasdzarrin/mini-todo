const path = {
    header: {
        content_type: "application/json",
        accept: "application/json",
    },
    auth: {
        login: "/auth/login",
        register: "/signup",
    },
    todo: {
        base: "/todos",
        detail: "/todos/{id}",
    },
    todo_item: {
        base: "/todos/{parent_id}/items",
        detail: "/todos/{parent_id}/items/{id}",
    },
}

export default path;