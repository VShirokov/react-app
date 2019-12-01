import React from 'react';
import PropTypes from 'prop-types';
import cn from 'cn-decorator';
import './TodoColumn.less';
import TodoItem from 'shared/todo/components/TodoItem/TodoItem.jsx';

@cn('todo-column')
class TodoColumn extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        todo: PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.column = React.createRef();

        this.state = {
            openInput: false
        };
    }

    // componentDidMount() {
    //     document.addEventListener('click', this.addItem);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.addItem);
    // }

    getPlus = node => {
        this.plus = node;
    }

    addItem = (e) => {
        //element.appendChild(<TodoItem />);
        console.dir(this.plus);
        console.dir(e.target);
        // if (e.target.innerHTML === '+') {
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

    renderItems(cn) {
        const { todo } = this.props;

        return todo.map((item, index) => <TodoItem key={index} text={item.text}/>);
    }

    render(cn) {
        const { title } = this.props;
        const { openInput } = this.state;

        //console.log(this.props);

        return (
            <div className={cn({ 'create': !!openInput })} ref={this.column}>
                <div className={cn('title-area')}>
                    <h2 className={cn('title')}>{title}</h2>
                    <span
                        className={cn('add-icon')}
                        ref={this.getPlus}
                    >
                        +
                    </span>
                </div>
                <div className={cn('content')}>
                    {this.renderItems(cn)}
                </div>
            </div>
        );
    };
}

export default TodoColumn;
