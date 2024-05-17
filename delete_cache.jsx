// Functionless window with no labels

function createDockableUI(thisObj) {
    var dialog =
        thisObj instanceof Panel ?
        thisObj :
        new Window("window", undefined, undefined, { resizable: true });
    dialog.onResizing = dialog.onResize = function() {
        this.layout.resize();
    };
    return dialog;
}

function showWindow(myWindow) {
    if (myWindow instanceof Window) {
        myWindow.center();
        myWindow.show();
    }
    if (myWindow instanceof Panel) {
        myWindow.layout.layout(true);
        myWindow.layout.resize();
    }
}

//Styling 

var mrCache = createDockableUI(this);
mrCache.txt = "Dialog";
mrCache.orientation = "column";
mrCache.alignChildren = ["center", "top"];
mrCache.spacing = 10;
mrCache.margins = 16;

var clearCache = mrCache.add("button", undefined, undefined, { name: "ClearCache" });
clearCache.txt = "Clear Cache";

mrCache.show();

showWindow(true);

// Clears the cache 

/* app.executeCommand(10200);
alert("Cache cleared!"); */