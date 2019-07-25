const electron = require('electron');
const { ipcRenderer } = electron;

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const { path } = document.querySelector('input').files[0];
	ipcRenderer.send('video:submit', path);
});

ipcRenderer.on('video:duration',(e,duration)=>{
    document.querySelector('#result').innerHTML = `The video is ${(duration/60).toFixed(2)} minutes`
})