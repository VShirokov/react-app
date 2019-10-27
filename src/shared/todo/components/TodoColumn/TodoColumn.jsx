import React from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';
import './TodoColumn.less';
import TodoItem from 'shared/todo/components/TodoItem/TodoItem.jsx';

@cn('todo-column')
class TodoColumn extends React.Component {
    static propTypes = {
        title: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.column = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this.addItem);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.addItem);
    }

    addItem = (e) => {
        //element.appendChild(<TodoItem />);
        //console.log(e.target.innerHTML);
        if (e.target.innerHTML === '+') {
            console.log('addItem true');
            console.log(this.column);
        } else {
            console.log('false');
        }
    }

    render(cn) {
        const { title } = this.props;

        //console.log(this.props);

        return (
            <div className={cn('')} ref={this.column}>
                <div className={cn('title-area')}>
                    <h2 className={cn('title')}>{title}</h2>
                    <span className={cn('add-icon')}>+</span>
                </div>
                <div className={cn('content')} />
            </div>
        );
    };
}

export default TodoColumn;
