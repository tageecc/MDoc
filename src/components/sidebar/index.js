import React, {Component} from 'react';
import styles from './style.css'
import util from '../../assets/js/util';
import {Avatar} from 'material-ui';
import List, {ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import FolderIcon from 'material-ui-icons/Folder';
import LeftArrow from 'material-ui-icons/PlayArrow';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

export default class SideBar extends Component {
    state = {open: true};
    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        return (
            <div className={styles.container}>
                <List className={styles.list} subheader={<ListSubheader>Project</ListSubheader>}>
                    <ListItem button onClick={this.handleClick}>
                        <LeftArrow className={util.classNames([styles.arrow,styles.icon,styles.icon2])}/>
                        <FolderIcon className={styles.icon}/>
                        <ListItemText inset primary="Folder1"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Inbox"/>
                        {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText inset primary="Starred"/>
                        </ListItem>
                    </Collapse>
                </List>
            </div>

        )
    }
}