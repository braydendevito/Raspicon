var remote = require('remote')
var ipc = require('ipc')
var Menu = remote.require('menu')

var menu = Menu.buildFromTemplate([
    {
        label: 'Network Settings',
        submenu: [
            {
                label: 'Connect to RASPICON',
                click: function () {
                    ipc.send('toggle-prefs')
                }
            }
        ]
    }
])
Menu.setApplicationMenu(menu)