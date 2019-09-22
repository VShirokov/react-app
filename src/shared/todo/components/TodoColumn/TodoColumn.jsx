import React from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';
import './TodoColumn.less';

@cn('todo-column')
class TodoColumn extends React.Component {
    static propTypes = {
        title: PropTypes.string
    };

    render(cn) {
        const { title } = this.props;

        console.log(this.props);

        return (
            <div className={cn('')}>
                <h2 className={cn('title')}>{title}</h2>
            </div>
        );
    };
}

export default TodoColumn;
