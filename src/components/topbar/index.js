import React, {Component} from 'react';
import styles from './style.css'

import {
    AppBar, Toolbar, Avatar, Typography,Button
} from 'material-ui';


export default class TopBar extends Component {
    render() {
        return (
            <AppBar position="static" className={styles.container}>
                <Toolbar>
                    <Avatar
                        alt="塔歌"
                        src={require('../../assets/images/avatar.jpg')}
                    />
                    <Typography className={styles.title}>tEditor</Typography>
                    <Button raised className={styles.loginBtn}>登录</Button>
                </Toolbar>
            </AppBar>
        )
    }
}