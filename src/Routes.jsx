import React from 'react';
import cn from 'cn-decorator';
import { Route, Switch } from 'react-router-dom';
import Header from 'shared/header/components/Header.jsx';
import App from 'shared/app/components/AppPage/AppPage.jsx';
import Todo from 'shared/todo/components/TodoPage/TodoPage.jsx';

@cn('app-wrapper')
class Routes extends React.Component {

    render(cn) {
        return (
            <div className={cn()}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/todo" component={Todo} />
                       {/* <Route path="/icons" component={Icons} />
                        <Route path="/forms" component={Forms} />
                        <Route path="/other" component={Other} />
                        <Route strict path="/dashboard" component={Dashboard} />*/}
                    </Switch>
            </div>
        );
    };
}

export default Routes;
