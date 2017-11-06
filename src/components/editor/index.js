import React, {Component} from 'react';
import fs from 'fs';
import {Editor, EditorState,DefaultDraftBlockRenderMap} from 'draft-js';
import Immutable from 'immutable';
import styles from './style.css'
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github} from 'react-syntax-highlighter/dist/styles';


export default class Main extends Component {

    // editorState: createEditorStateWithText(text),
    state = {editorState: EditorState.createEmpty()};

    focus = () => this.editor.focus();

    onChange = (editorState) => this.setState({editorState});

    render() {
        const {left} = this.props;

        return (
            <div className={styles.container} onClick={this.focus} style={{left, width: 'calc(100% - ' + left + 'px)'}}>
                <Editor
                    ref={v => this.editor = v}
                    onChange={this.onChange}
                    editorState={this.state.editorState}
                />
            </div>
        )
    }
}