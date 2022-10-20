import { useEffect } from 'react';
import './App.css'
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
   // tg.redy();
  }, [])

  const Close = () => {
    tg.Close()
  }
  return (
    <div className='App'>
      fwefwf
      <button onClick={Close}>Закрыть</button>
    </div>
  )
}

export default App