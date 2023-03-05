export const todoListSelector = (state) => {
    const searchText = searchTextSelector(state);
    const todoRemaining = state.todoList.filter((todo) => {
        return todo.name.includes(state.filters.search);
    });

    return todoRemaining;
};
export const searchTextSelector = (state) => state.filters.search;

// Trong thực tế có rất nhiều selector, nên ta dùng một thư viện gọi là reselect giúp viết lồng các select này rất là tiện.
// Thư viện này đã có sẵn nếu dùng Redux Toolkit còn không sẽ
// yarn add reselect
