export const add_todo = (todo) => {
    console.log(`add todo: ${todo}`);

    return {
        type: 'ADD_TODO',
        todo
    };
};
