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
    state = {
        canDrag: false,
        left: 500
    };

    onBorderDrop({clientX: left}) {
        if (this.state.canDrag) this.setState({left});
    }

    componentDidMount() {
        document.getElementById('borderLeft').addEventListener('mousedown', () => this.setState({canDrag: true}));
        document.addEventListener('mouseup', () => this.setState({canDrag: false}));
        document.addEventListener('mousemove', this.onBorderDrop.bind(this));
    }

    render() {
        let {left} = this.state;
        return (
            <div className="full-height">
                <TopBar/>
                <Sidebar left={left}/>
                <Editor left={left}/>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={createStore(reducer)}>
    <App/>
</Provider>, document.getElementById('app'));