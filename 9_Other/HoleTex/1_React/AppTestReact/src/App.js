import './App.css';
import Content from './hooks_learning/ContextAPI_useContext/components/Content';
import Header from './hooks_learning/ContextAPI_useContext/components/Header';
import Sidebar from './hooks_learning/ContextAPI_useContext/components/Sidebar';
import { AppProvider } from './hooks_learning/ContextAPI_useContext/Context/AppProvider';

function App() {
    return (
        <div className="App">
            <AppProvider>
                <Header />
                <Content />
                <Sidebar />
            </AppProvider>
        </div>
    );
}

export default App;
