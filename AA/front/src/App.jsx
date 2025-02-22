import { useState, useEffect } from 'react'
import './App.css'; import axios from 'axios';
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    const fetchJokes = async () => {
      // const response = await fetch('http://localhost:3001/api/jokes')
      // const data = await response.json()
      const response = await axios.get('http://localhost:3001/api/jokes')
      setJokes(response.data)
    }
    fetchJokes()
  }, [])
  return (
    <div className="App">
      <h1>Full Stack</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3> <p>{joke.content}</p>
          </div>)
      })}
    </div>)
}
export default App
