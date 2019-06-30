/* eslint-disable no-console,react/no-multi-comp */
import React from 'react';
import ReactDom from 'react-dom';
import './Nav.css'



class NavDrawer extends React.Component {


    render() {
        return (
            <div >
                <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
                <label for="drawer-toggle" id="drawer-toggle-label"></label>
                <header>HAUS</header>
                <nav id="drawer">
                    <ul>
                        <li><a href="#">Homes</a></li>
                        <li><a href="#">Profiles</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Log-out</a></li>
                    </ul>
                </nav>
                <div id="page-content">
                    <p>Page Content</p>
                </div>
            </div>
        )
    }
}


export default NavDrawer
