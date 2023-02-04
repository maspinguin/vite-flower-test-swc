import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDegree(degree => (degree + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="flower">
        <div className="petal" style={{ transform: `rotate(${degree}deg)` }} />
        <div className="petal" style={{ transform: `rotate(${degree + 60}deg)` }} />
        <div className="petal" style={{ transform: `rotate(${degree + 120}deg)` }} />
        <div className="petal" style={{ transform: `rotate(${degree + 180}deg)` }} />
        <div className="petal" style={{ transform: `rotate(${degree + 240}deg)` }} />
        <div className="petal" style={{ transform: `rotate(${degree + 300}deg)` }} />
        <div className="center" />
      </div>
    </div>
  )
}

export default App
