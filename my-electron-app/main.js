const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: app.isPackaged,
    webPreferences: {
      'web-security': false,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadFile(path.join(__dirname, './frontend/index.html'));

  if (!app.isPackaged) {
    // Running in debug
    mainWindow.webContents.openDevTools();
    console.log('Have fun Debugging!');
  } else {
    // Running in production
    Menu.setApplicationMenu(false);
  }
}


app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});