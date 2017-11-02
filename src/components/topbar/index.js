import React, {Component} from 'react';
import styles from './style.css'

import {
    AppBar, Toolbar, Avatar, Typography, Button
} from 'material-ui';


export default class TopBar extends Component {
    state = {};

    render() {
        let {isLogin} = this.state;
        return (
            <AppBar position="static" className={styles.container}>
                <Toolbar>
                    <Typography className={styles.title}>mDoc</Typography>
                    {
                        !isLogin ?
                            <Avatar
                                alt="塔歌"
                                className={styles.right}
                                src={require('../../assets/images/avatar.jpg')}
                            /> :
                            <Button raised className={styles.right}>登录</Button>
                    }
                </Toolbar>
            </AppBar>
        )
    }
}