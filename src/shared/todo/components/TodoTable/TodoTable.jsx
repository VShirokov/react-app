import React from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';
import './TodoTable.less';

@cn('todo-table')
class TodoTable extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    };

    render(cn) {
        const { name } = this.props;

        return (
            <div className={cn('')}>
                <div className={cn('title')}>
                    <h2>{name}</h2>
                </div>
            </div>
        );
    };
}

export default TodoTable;
