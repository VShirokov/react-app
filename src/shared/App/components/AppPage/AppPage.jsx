import React from 'react';
import cn from 'cn-decorator';
import logo from 'shared/app/i/logo.svg';
import './AppPage.less';

@cn('app')
class AppPage extends React.Component {

    render(cn) {
        return (
            <div className={cn('')}>
                <img src={logo} className={cn('logo')} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={cn('link')}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        );
    };
}

export default AppPage;
