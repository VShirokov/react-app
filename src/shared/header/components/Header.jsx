import React from 'react';
import cn from 'cn-decorator';
import { Link } from 'react-router-dom';
import './Header.less';

@cn('header')
class Header extends React.Component {

    render(cn) {
        return (
            <header className={cn('')}>
                <nav className={cn('navbar')}>
                    <ul className={cn('nav-list')}>
                        <li className={cn('nav-item')}><Link to="/" activeonlywhenexact="true" className={cn('nav-link')}>App</Link></li>
                        <li className={cn('nav-item')}><Link to="/todo" activeonlywhenexact="true" className={cn('nav-link')}>Todo</Link></li>
                    </ul>
                </nav>
            </header>
        );
    };
}

export default Header;
