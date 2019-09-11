import React from 'react';
import cn from 'cn-decorator';
import './TodoPage.less';
import TodoTable from 'shared/todo/components/TodoTable/TodoTable.jsx';
import { data } from 'shared/todo/constants/data.js';

@cn('todo')
class TodoPage extends React.Component {

    render(cn) {
        const { boardName } = data;

        return (
            <div className={cn('')}>
                <div className={cn('title')}>
                    <h1>Таблица дел</h1>
                </div>
                <TodoTable name={boardName} />
            </div>
        );
    };
}

export default TodoPage;
