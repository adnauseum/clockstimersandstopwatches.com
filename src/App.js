import { useState } from 'react'
import { useBrowserCache } from "use-browser-cache";

function App() {
  const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const browserCache = useBrowserCache();
  if (browserCache.cacheIsReady) {
  }

  const [currentTime, setCurrentTime] = useState(null);
  setInterval(() => {
    setCurrentTime(String(new Date()))
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nothing but clocks, timers, and stopwatches</h1>
        <p>Works offline!</p>
      </header>

      <div className="clock">

        <p>Detected timezone: {detectedTimezone}</p>
        <p>{currentTime || "Loading"}</p>

      </div>

    </div>
  );
}

export default App;

