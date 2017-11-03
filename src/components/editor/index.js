import React, {Component} from 'react';
import styles from './style.css'

export default class Editor extends Component {

    render() {
        let {left} = this.props;
        return (
            <div className={styles.container} style={{left}}>
                <div id='borderLeft' className={styles['border-ctl']} />
            </div>
        )
    }
}