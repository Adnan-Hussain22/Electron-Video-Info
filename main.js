const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    console.log('The app is up and running!');
    const win = new BrowserWindow({});
    win.loadFile('./index.html');
});
