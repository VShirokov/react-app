import React from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';
import Column from 'shared/todo/components/TodoColumn/TodoColumn.jsx';
//import TodoPageContext from 'shared/todo/TodoPageContext.js';
//import { data } from 'shared/todo/constants/data.js';
import './TodoTable.less';

@cn('todo-table')
class TodoTable extends React.Component {
    static propTypes = {
        boardName: PropTypes.string,
        week: PropTypes.array,
    };

    renderContent(cn) {
        const { week } = this.props;

        return week.map(
            (item, index) => <Column key={index+item} title={item} className={cn('column')} />
        );
    }

    render(cn) {
        const { boardName, week } = this.props;

        return (
            <div className={cn('')}>
                <div className={cn('title')}>
                    <h2>{boardName}</h2>
                </div>
                <div className={cn('content')}>
                    {week && this.renderContent(cn)}
                </div>
            </div>
        );
    };
}

export default TodoTable;
