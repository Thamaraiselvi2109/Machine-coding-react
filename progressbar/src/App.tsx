import './App.css'
import { ProgressBar } from './ProgressBar'

function App() {
  const bars = [5, 10, 20, 29, 50, 75, 100]
  
  return (
    <>
      <h1>Progress Bar</h1>
      {bars.map((item) => <ProgressBar key={item} progress={item} />)}
    </>
  )
}

export default App
