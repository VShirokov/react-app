export default (state = [], action) => {
    switch (action) {
        case 'ADD_TODO':
            return [...state, action.item];
        default:
            return state;
    }
};
