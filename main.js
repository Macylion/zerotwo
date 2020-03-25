const { app, BrowserWindow, screen, Menu, Tray } = require("electron");
const path = require("path");

let visible = true;

let mainWindow = null;
function createWindow() {
	mainWindow = new BrowserWindow({
		width: 128,
		height: 128,
		transparent: true,
		frame: false,
		alwaysOnTop: true,
		skipTaskbar: true,
		resizable: false,
		x: screen.getPrimaryDisplay().bounds.width - 128 - 40,
		y: screen.getPrimaryDisplay().bounds.height - 128 - 40,

		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: false
		}
	});
	mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", function() {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

let tray = null;
app.on("ready", () => {
	tray = new Tray("./icon.ico");
	const contextMenu = Menu.buildFromTemplate([
		{ label: "Zero Two" },
		{ type: "separator" },
		{
			label: "Hide",
			type: "checkbox",
			click() {
				if (visible) mainWindow.hide();
				else mainWindow.show();
				visible = !visible;
			}
		},
		{ type: "separator" },
		{
			label: "Author",
			click() {
				let authorWin = new BrowserWindow({ width: 800, height: 600 });
				authorWin.on("closed", () => {
					win = null;
				});
				authorWin.loadFile("author.html");
				authorWin.setMenu(null);
			}
		},
		{
			label: "Exit",
			click() {
				app.quit();
			}
		}
	]);
	tray.setToolTip("ZeroTwo <3");
	tray.setContextMenu(contextMenu);
});
