import React, {Component} from 'react';
import Immutable from 'immutable';
import {Typography} from 'material-ui';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import FolderIcon from 'material-ui-icons/Folder';
import FileIcon from 'material-ui-icons/InsertDriveFile';
import LeftArrow from 'material-ui-icons/PlayArrow';

import styles from './style.css'
import {classNames, getFileList} from '../../assets/js/util';

export default class SideBar extends Component {
    constructor() {
        super();
        let paths = '/Users/tagee/Documents/workspace-own/mDoc';
        this.state = {
            nodes: Immutable.fromJS(getFileList(paths/*,['.git', '.idea']*/))
        };
    }

    handleClick = (deep) => {
        let nodes = this.state.nodes.toJS(), tmp = nodes;

        deep.map(d=>tmp=tmp = tmp[d]);

        multiSet(tmp);
        function multiSet(nodes, open) {
            nodes['open'] = open === undefined ? !nodes['open'] : open;
            if (!nodes['open'] && nodes['child']) nodes.child.map(n => multiSet(n, false));
        }

        this.setState({
            nodes: Immutable.fromJS(nodes)
        })
    };

    getChildNode(node, index, deep) {
        return (
            <List key={index} className={classNames([styles.subList,styles.list])}>
                <ListItem button disableRipple onDoubleClick={this.handleClick.bind(this, deep)}
                          className={styles.listItem}>
                    <LeftArrow
                        onClick={this.handleClick.bind(this, deep)}
                        className={classNames([
                            styles.arrow,
                            styles.icon,
                            node.open && styles.icon2, /*打开的文件夹图标旋转*/
                            !(node.child && node.child.length) && styles.hide /*非文件夹不显示*/
                        ])}/>
                    {node.child ? <FolderIcon className={styles.icon}/> : <FileIcon className={styles.icon}/>}
                    <ListItemText primary={node.name} className={styles.listItem}/>
                </ListItem>
                {node.child ? (
                    <Collapse in={node.open} unmountOnExit>
                        {node.child.map((node, index) => this.getChildNode(node, index, [...deep, 'child', index]))}
                    </Collapse>
                ) : ''}
            </List>
        )
    }

    render() {
        let {left} = this.props;
        return (
            <div className={styles.container} style={{width:left}}>
                <Typography type="subheading" gutterBottom className={styles.title}>Project</Typography>
                {this.state.nodes.toJS().map((node, index) => this.getChildNode(node, index, [index]))}
            </div>

        )
    }
}