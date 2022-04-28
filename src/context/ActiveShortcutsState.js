import { useState } from "react";
import ActiveShortcutContext from "./ActiveShortcutContext";

const ActiveShortcutState = (props) => {
    const [state, setState] = useState([]);
    const updateState = (newShortcut) => {
        setState([...state, newShortcut]);
    }
    return (
        <ActiveShortcutContext.Provider value={{state, updateState}}>
            {props.children}
        </ActiveShortcutContext.Provider>
    )
}

export default ActiveShortcutState;