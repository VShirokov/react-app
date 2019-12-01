import React from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';
import Column from 'shared/todo/components/TodoColumn/TodoColumn.jsx';
import { data, daysOfWeek } from 'shared/todo/constants/data.js';
import './TodoTable.less';

@cn('todo-table')
class TodoTable extends React.Component {
    static propTypes = {
        boardName: PropTypes.string,
        daysOfWeek: PropTypes.array,
    };

    renderContent(cn) {
        const { daysOfWeek } = this.props;

        //console.log(daysOfWeek);
        return daysOfWeek.map((item, index) => {
            const { title, todo } = item;
            return <Column key={index+item} title={title} todo={todo} />;
        });
    }

    render(cn) {
        const { boardName } = this.props;
        //console.log(this.state);
        return (
            <div className={cn('')}>
                <div className={cn('title')}>
                    <h2>{boardName}</h2>
                </div>
                <div className={cn('content')}>
                    {daysOfWeek && this.renderContent(cn)}
                </div>
            </div>
        );
    };
}

export default TodoTable;
