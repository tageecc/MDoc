'use strict';

const {app, BrowserWindow} = require('electron');
const isDevelopment = process.env.NODE_ENV === 'development' || false;

let win;

if(isDevelopment){
    require('electron-reload')(__dirname, {
        electron: require('${__dirname}/../../node_modules/electron')
    })
}

app.on('ready', () => {
    win = new BrowserWindow({width: 800, height: 600,frame: false});

    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null
    });

    if (isDevelopment) {
        win.webContents.openDevTools();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});