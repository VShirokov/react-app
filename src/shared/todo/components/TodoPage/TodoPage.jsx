import React from 'react';
import cn from 'cn-decorator';
import './TodoPage.less';
import TodoTable from 'shared/todo/components/TodoTable/TodoTable.jsx';
//import TodoPageContext from 'shared/todo/TodoPageContext.js';
import { data, daysOfWeek } from 'shared/todo/constants/data.js';

@cn('todo-page')
class TodoPage extends React.Component {
    constructor() {
        super();
        this.state = { data };
    }

    addItem = (e) => {
        //element.appendChild(<TodoItem />);
        console.dir(this.plus);
        console.dir(e.target);
        if (e.target === this.plus) {
        this.setState(prevState => ({
            openInput: true
        }));
            console.log('addItem true');
            //console.log(this.column);
        } else {
            console.log('false');
            this.setState(prevState => ({
                openInput: !prevState.openInput
            }));
        }
    }

    render(cn) {
        return (
            <div className={cn('')} onClick={this.addItem}>
                <div className={cn('title')}>
                    <h1>Таблица задач</h1>
                </div>
                <TodoTable daysOfWeek={daysOfWeek} {...data} />
            </div>
        );
    };
}

export default TodoPage;
