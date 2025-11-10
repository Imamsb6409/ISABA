import { useState, useEffect } from "react";

import MainContent from "./layout/MainContent";
import SplashScreen from "./components/splashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // tampil 2.5 detik
    return () => clearTimeout(timer);
  }, []);

  return <div className="">{showSplash ? <SplashScreen /> : <MainContent />}</div>;
}
export default App;
