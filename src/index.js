import React from 'react';
import ReactDOM from 'react-dom';

const {createStore} = require('redux');
const {Provider} = require('react-redux');
const reducer = require('./reducer/index');
import './assets/css/global.css';
import TopBar from './components/topbar';
import Sidebar from './components/sidebar';
import Editor from './components/editor';

class App extends React.Component {

    render() {
        return (
            <div className="h100">
                <TopBar/>
                <Sidebar/>
                <Editor/>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={createStore(reducer)}>
    <App/>
</Provider>, document.getElementById('app'));