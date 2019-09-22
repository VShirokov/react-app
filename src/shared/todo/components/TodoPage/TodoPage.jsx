import React from 'react';
import cn from 'cn-decorator';
import './TodoPage.less';
import TodoTable from 'shared/todo/components/TodoTable/TodoTable.jsx';
//import TodoPageContext from 'shared/todo/TodoPageContext.js';
import { data } from 'shared/todo/constants/data.js';

@cn('todo-page')
class TodoPage extends React.Component {
    constructor() {
        super();
        this.state = { data };
    }
    render(cn) {
        return (
            <div className={cn('')}>
                <div className={cn('title')}>
                    <h1>Таблица задач</h1>
                </div>
                <TodoTable {...data} />
            </div>
        );
    };
}

export default TodoPage;
