import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
    const [user, setUser] = useState('');
    useEffect(async () => {

        const response = await fetch('/name');
        const data = await response.json();
        setUser(data.user);

    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hi, {user}!
                </a>
            </header>
        </div>
    );
}

export default App;
