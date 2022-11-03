// import HookState from './hooks_method/useState';
import HookEffect from './hooks_method/useEffect';
import {useState} from 'react'


function App() {
  const [mounted, setMounted] = useState(false)
  return (
    <div className="App">
      
      <button style={{margin: 20}} onClick={() => setMounted(!mounted)}>Mounted_Unmounted</button>

      {/* <HookState/> */}
      {mounted && <HookEffect/>}
    </div>
  );
}

export default App;
