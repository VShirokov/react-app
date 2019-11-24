import React from 'react';
import cn from 'cn-decorator';
import logo from 'shared/app/i/logo.svg';
import './AppPage.less';
import {
    handleCreateUser,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser,
} from 'shared/app/utils/userApi.js';
import {
    handleCreatePost,
    handleGetPost,
    handleUpdatePost,
    handleDeletePost,
} from 'shared/app/utils/postApi.js';

@cn('app')
class AppPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // fetch("http://localhost:3636/api/hello")
        //   .then(res => res.json())
        //   .then(res => this.setState({ data: res }))
        //   .then(res => console.log(res))
        //   .catch(err => console.log(err));
        //this.addUserHandle();
    }

    render(cn) {

        return (
            <div className={cn('')}>
                <img src={logo} className={cn('logo')} alt="logo" />
                {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                <a
                    className={cn('link')}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div className={cn('api-btn')}>
                    <div className={cn('button-block')}>
                        <a className={cn('user', { 'create-user': true })} onClick={handleCreateUser}>Create user</a>
                        <a className={cn('user', { 'read-user': true })} onClick={handleGetUser}>Read user</a>
                        <a className={cn('user', { 'update-user': true })} onClick={handleUpdateUser}>Update user</a>
                        <a className={cn('user', { 'delete-user': true })} onClick={handleDeleteUser}>Delete user</a>
                    </div>
                    <div className={cn('button-block')}>
                        <a className={cn('user', { 'create-user': true })} onClick={handleCreatePost}>Create post</a>
                        <a className={cn('user', { 'read-user': true })} onClick={handleGetPost}>Read posts</a>
                        <a className={cn('user', { 'update-user': true })} onClick={handleUpdatePost}>Update posts</a>
                        <a className={cn('user', { 'delete-user': true })} onClick={handleDeletePost}>Delete posts</a>
                    </div>
                </div>
                {/* {this.getHello()} */}
                {/* <h2 onClick={this.addUserHandle}>Data</h2>
                <h2 onClick={this.getUserHandle}>GetData</h2> */}
                {/* <Hello /> */}
                    {/* {this.state.data.map((item, i) => {
                        return (
                            <div key={i} className={cn('databse')}>
                                <ul>
                                <li>ID: {item}</li>
                                {/* <li>Name: {item.name</li> */}
                                {/* <li>Age: {item.age}</li> */}
                                {/* <li>Password: {item.pass}</li> * /}
                                </ul>
                            </div>
                        );
                    })} */}
            </div>
        );
    };
}

export default AppPage;
