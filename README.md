# Getting Started with Keyboard Shortcut Wrapper
This is a wrapper build over keypress.js library.
## Usage
Keyboard shortcut component requires three props to be passed:
combo -> key combination of any two keys 
callback -> function that needs to be executed on the pressing the combo mentioned above
description -> a small description of the functionality in the callback function

Example ->
 <KeyboardShortcut combo="shift y" callback={turnYellow}
    description="Turns the components background color to yellow" />


### General Docs
Main wrapper component i.e., Keyboard-shortcut.js consists of a function simpleCombo,
which captures and registers the key combinations sent as props to the component. This is acting as the interface between keypress.js and this wrapper.  
#checkForShortcut function is responsible for ensuring that no two instances should have 
the same key combination shortcuts. 
#React context is getting used in maintaining a global state of props passed. 