import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import KeyboardShortcut from './components/Keyboard-shortcut';
import ActiveShortcutState from './context/ActiveShortcutsState';

function App() {
  const baseURL = 'https://reqres.in/api/users?page=2';
  const turnYellow = () => {
    console.log("turn yellow...");
  }
  const turnGreen = () => {
    console.log("turn green...");
  }
  const turnBlue = () => {
    console.log("turn blue...");
  }
  const turnOrange = () => {
    console.log("turn orange...");
  }
  useEffect(() => {
    axios.get(baseURL).then(response => { console.log(response) });
  }, []);
  return (
    <>
      <ActiveShortcutState>
      <KeyboardShortcut combo="shift y" callback={turnYellow}
          description="Turns the components background color to yellow" />
        <KeyboardShortcut combo="shift b" callback={turnGreen}
          description="Turns the components background color to green" />
        <KeyboardShortcut combo="shift k" callback={turnBlue}
          description="Turns the components background color to blue" />
        <KeyboardShortcut combo="shift d" callback={turnOrange}
                    description="Turns the components background color to orange" />
        </ActiveShortcutState>
    </>
  );
}

export default App;
