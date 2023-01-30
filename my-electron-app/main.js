const { app, BrowserWindow } = require('electron')
const {ipcMain} = require('electron')

ipcMain.on('form-submission', (event, arg) => {
  console.log(event);
  console.log(arg) //ez fogja megjeleníteni a bevitt adatot
})

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
    console.log("createWindow");
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })