import './App.css';
// import MyTabs from './1_Learn_antd_component/1_TabPane';
// import TestReactFlvPlayer from './Video/TestReactFlvPlayer';
// import TestReactPlayer from './Video/TestReactPlayer';
import FlvPlayer from './Video/TestFlvjs';
// import FlvVideoPlayer from './Video/TestReactFlvPlayer';
function App() {
    return (
        <div className="App">
            {/* <TestReactPlayer /> */}
            <FlvPlayer url="http://0.0.0.0:55557/stream/clover_q7.flv" />
            {/* <FlvPlayer url="http://0.0.0.0:55557/stream/cam_360_554.flv" /> */}

            {/* <FlvVideoPlayer url="http://0.0.0.0:55557/stream/clover_q7.flv" /> */}
        </div>
    );
}

export default App;
