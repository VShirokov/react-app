import React from 'react';
//import PropTypes from 'prop-types';
import cn from 'cn-decorator';
//import './TodoColumns.less';

@cn('todo-item')
class TodoItem extends React.Component {
    static propTypes = {
        //pageProps: PropTypes.object,
    };

    render(cn) {
        //const { } = this.props;

        //console.log(this.props);

        return (
            <div className={cn('')} />
        );
    };
}

export default TodoItem;
