import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoAction from 'store/actions/add_todo.js';
import TodoPageComponent from 'shared/todo/components/TodoPage/TodoPage.jsx';
import { data, daysOfWeek } from 'shared/todo/constants/data.js';

class TodoPage extends React.Component {
    constructor() {
        super();
    }

    render(cn) {
        return (
            <TodoPageComponent />
        );
    };
}

const mapStateToProps = (state, props) => {
    return { todo : state.todo };
}

const mapDispatchToProps = dispatch => {
    return { action : bindActionCreators(TodoAction, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
export { TodoPage };
