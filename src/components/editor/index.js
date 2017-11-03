import React, {Component} from 'react';
import fs from 'fs';
import styles from './style.css'
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
export default class Editor extends Component {

    state = {
        value: 0,
        files:[
            {
                name:'123',
                path:'/Users/tagee/Documents/workspace-own/mDoc/src/assets/css/global.css'
            },
            {
                name:'123',
                path:''
            },
            {
                name:'123',
                path:''
            },
            {
                name:'123',
                path:''
            }
        ]
    };
    handleChange = (event, value) => {
        this.setState({value});
    };
    getFileContent(path){
        console.log(fs.readFileSync(path,'utf-8'));
        return fs.readFileSync(path,'utf-8');
    }
    render() {
        const {left} = this.props;
        const {value,files} = this.state;

        return (
            <div className={styles.container} style={{left,width:'calc(100% - '+left+'px)'}}>
                <div id='borderLeft' className={styles['border-ctl']}/>
                <AppBar position="static" color="default">
                    <Tabs
                        scrollable
                        value={value}
                        scrollButtons="off"
                        className={styles.tabs}
                        onChange={this.handleChange}
                    >
                        {files.map((file,index)=><Tab key={index} label={<div>{file.name}</div>}/>)}
                    </Tabs>
                </AppBar>
                {files.map((file,index)=>value===index&&<div key={index} className={styles['tabs-content']} contentEditable="true"><SyntaxHighlighter language='javascript' style={github}>{this.getFileContent(file.path)}</SyntaxHighlighter></div>)}
            </div>
        )
    }
}