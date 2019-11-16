import React from 'react';
import cn from 'cn-decorator';
import logo from 'shared/app/i/logo.svg';
import './AppPage.less';
import Hello from 'shared/app/utils/hello.js';
import axios from 'axios';

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

    addUserHandle() {
        // axios.get(`http://localhost:3636/api/hello`, {
        // })
        //   .then(res => setState(res.data))
        //   .then(res => console.log(res))
        //   .catch(err => console.log(`error - ${err}`))
        //   .finally(() => console.log("axios in hello.js"));

        // axios.post('http://localhost:3636/api/posts/userprofiletodb', {
        //     email: 'test@test.test',
        //     nickname: 'Fred',
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        axios.post('/api/posts/userprofiletodb', profile )
        .then(axios.get('/api/get/userprofilefromdb',
        		{ params: { email: profile.profile.email } })
          .then(res => context.handleAddDBProfile(res.data)) )
        .then(history.replace('/') )
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    getUserHandle() {
        // axios.get(`http://localhost:3636/api/hello`, {
        // })
        //   .then(res => setState(res.data))
        //   .then(res => console.log(res))
        //   .catch(err => console.log(`error - ${err}`))
        //   .finally(() => console.log("axios in hello.js"));
        axios.post('http://localhost:3636/api/posts/userprofiletodb', {
            email: 'test@test.test',
            nickname: 'Fred',
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    getHello = () => {
        axios.get('http://localhost:3636/api/hello')
            .then((res)=>{ console.log(res) })
            .catch((e)=>{ console.log('error - ' + e) });
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
                {this.getHello()}
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
