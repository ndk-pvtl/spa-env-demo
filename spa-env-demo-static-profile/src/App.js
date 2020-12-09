import logo from './logo.svg';
import './App.css';

const environment = window.environment !== '##ENV_CONFIG##' ? window.environment : {
    user: process.env.REACT_APP_USER
};

function App() {
    const user = environment.user;
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
