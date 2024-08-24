// import CleanUpFunctionDemo from "./components/CleanUpFunctionDemo";
import { useState } from "react";
// import MouseMoveEvent from "./components/MouseMoveEvent";
// import AbortingNetWorkRequest from "./components/AbortingNetWorkRequest";
// import StrictExample from "./components/StrictExample";
import FocusOnInputOnMounting from "./components/FocusOnInputOnMounting";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div>
      <label htmlFor="showComponent">show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => {
          setShowComponent(!showComponent);
        }}
      />
      {/* {showComponent && <CleanUpFunctionDemo />} */}
      {/* {showComponent && <MouseMoveEvent />} */}
      {/* {showComponent && <AbortingNetWorkRequest />} */}
      {/* {showComponent && <StrictExample />} */}
      {showComponent && <FocusOnInputOnMounting />}
    </div>
  );
}

export default App;
