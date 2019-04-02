var {app, BrowserWindow} = require('electron');
const { ipcMain } = require("electron");

var win = null;

app.on('ready', function() {
    win = new BrowserWindow({
        height: 1080,
        width: 1920,
        webPreferences: {
            nodeIntegration: true,
            allowEval: false
        }
    });
    win.maximize();
    win.loadURL('file://' + __dirname + '/app/landing.html');
    win.webContents.toggleDevTools();
});

ipcMain.on("changeWindow", function(event, arg) {
    switch (arg) {
        case "index":
            win.loadURL('file://' + __dirname + '/app/index.html');
            break;
    }
});