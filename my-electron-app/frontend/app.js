const {ipcRenderer} = require('electron')

document.getElementById("submit-button").addEventListener("click", function() {
  let inputValue = document.getElementById("input-field").value;
  ipcRenderer.send('form-submission', inputValue)
});