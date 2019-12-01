import React from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';
//import './TodoItem.less';

@cn('todo-item')
class TodoItem extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    };

    render(cn) {
        const { text } = this.props;

        //console.log(this.props);

        return (
            <div className={cn('')}>
                {text}
            </div>
        );
    };
}

export default TodoItem;
