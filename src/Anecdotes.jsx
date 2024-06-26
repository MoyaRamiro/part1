import { useState } from "react"

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomNum = () => Math.floor(Math.random() * (anecdotes.length))

  
  const vote = (anecdoteNum) => {
    const copy = [...points]
    copy[anecdoteNum] += 1
    setPoints(copy)
    console.log(points)
  }

  const maxVotes = () => Math.max(...points)

  return (
    <div>
      <h3>Anecdote of the day</h3>

      {anecdotes[selected]} <br/>
      <p>Has {points[selected]} votes</p>

      <Button onClick={()=>setSelected(randomNum())} text="next anecdote"/>
      <Button onClick={()=>vote(selected)} text="vote"/>

      <h3>Anecdote with most votes</h3>
      {anecdotes[points.indexOf(maxVotes())]}

    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>



export default Anecdotes