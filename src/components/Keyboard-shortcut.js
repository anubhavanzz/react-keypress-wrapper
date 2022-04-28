import keypress from "keypress.js";
import { useContext, useEffect } from "react";
import ActiveShortcutContext from "../context/ActiveShortcutContext";

function KeyboardShortcut(props) {
    const active = useContext(ActiveShortcutContext);
    const simpleCombo = () => {
        if (checkForShortcut(props.combo)) {
        // active.updateState(props.combo);
            const listener = new keypress.Listener();
            listener.simple_combo(props.combo, function () {
                props.callback();
            });
        } else {
            alert('Key combination already in use by another instance.');
        }
    }

    useEffect(() => {
        if (props.combo && props.callback && props.description) simpleCombo();
    });
    
    const checkForShortcut = (shortcut) => {
        return !(active.state?.findIndex(element => element === shortcut) >= 0);
    }
    
    return (
        <>
            {`"${props.combo}": `} {props.description} <br />
        </>
    );
}

export default KeyboardShortcut;