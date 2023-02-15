// Phân tích những dữ liệu trên UI sẽ lưu vào đây
/**Ở ví dụ này ta có hai dữ liệu chính là
 * Filter: lưu các trạng thái filter như search, status, priority, ...
 * TodoList: lưu các công việc là trạng thái của nó.
 *
 * */

const initState = {
    filters: {
        search: '',
        status: 'All', // mặc định là All,
        priority: [], // có thể chọn nhiều nên ta để vào một mảng
    },
    todoList: [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Yoga1', completed: false, priority: 'Low' },
        { id: 3, name: 'Learn Yoga2', completed: false, priority: 'High' },
    ],
};

const rootReducer = (state = initState, action) => {
    /**object action
     * {
     *  type: 'todoList/addTodo',
     *  payload: ' { id: 4, name: 'Learn Yoga4', completed: false, priority: 'High' },'
     * }
     */
    console.log('action: ', action);
    console.log('state: ', state);
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload,
                },
            };
        default:
            return state;
    }
};

export default rootReducer;
