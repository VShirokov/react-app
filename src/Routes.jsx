import React from 'react';
import cn from 'cn-decorator';
import { Route, Switch } from 'react-router-dom';
import Header from 'shared/header/components/Header.jsx';
import MainPage from 'shared/app/components/AppPage/AppPage.jsx';
import Todo from 'shared/todo/components/TodoPage/TodoPage.jsx';

@cn('app-wrapper')
class Routes extends React.Component {

    render(cn) {
        return (
            <div className={cn()}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/todo" component={Todo} />
                    </Switch>
            </div>
        );
    };
}

export default Routes;
