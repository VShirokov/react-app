import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.less';
import App from './shared/App/App.jsx';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <Router>
            <Switch>
                <Route path="/" name="Home" component={App} />
                <Route path="/todo" component={App} />
                {/* <Route path="/icons" component={Icons} />
                <Route path="/forms" component={Forms} />
                <Route path="/other" component={Other} />
                <Route strict path="/dashboard" component={Dashboard} /> */}
            </Switch>
        </Router>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
