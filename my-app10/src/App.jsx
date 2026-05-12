import React, {useState, useEffect} from "react";
import Timer from  "./component/Timer"
function App() {
  const [showTimer, setShowTimer] = useState(false);
  return(
    <div>
      {showTimer && <Timer />}
      <button onClick={()=>setShowTimer(!showTimer)}>타이머 시작/종료</button>
    </div>
  );

}
export default App;