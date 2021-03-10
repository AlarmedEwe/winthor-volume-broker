const {app, BrowserWindow} = require('electron');
require('@electron/remote/main').initialize();

function createWindow() {
    const window = new BrowserWindow({
        width:  450,
        height: 450,
        minWidth:   450,
        minHeight:  450,
        frame:  false,
        icon:   __dirname + 'favicon.png',
        webPreferences: {
            nodeIntegration:    true,
            enableRemoteModule: true
            , contextisolation: true
        }
    });
    
    window.webContents.openDevTools();
    window.removeMenu();
    window.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().lenght === 0)
        createWindow();
});