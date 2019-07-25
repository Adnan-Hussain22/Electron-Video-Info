const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const { app, BrowserWindow, ipcMain } = electron;
let win = null;
app.on('ready', () => {
	console.log('The app is up and running!');
	win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		}
	});
	win.loadFile('./index.html');
});

ipcMain.on('video:submit', (event, path) => {
	ffmpeg.ffprobe(path, (err, metaData) => {
		win.webContents.send('video:duration', metaData.format.duration);
	});
});
