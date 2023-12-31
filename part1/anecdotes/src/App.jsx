import { useState, useEffect } from 'react'

const Button    = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Display   = ({header, text}) => <div><h1>{header}</h1>{text}</div>
const App = () => {
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
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }
  const [pointer, setPointer] = useState({...points})
  const [mostVotedPointer, setMostVotedPointer] = useState()

  const generateRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex)
  }

  const voteRandomAnecdote = () => {
    setPointer((prevPointer) => ({
      ...prevPointer,
      [selected]: prevPointer[selected] + 1,
    }));
  };
  
  // Use it for solving 'Update of the state is asynchronous' problem
  useEffect(() => {
    const maxValue = Math.max(...Object.values(pointer));
    setMostVotedPointer(Object.keys(pointer).find((key) => pointer[key] === maxValue));
  }, [pointer]);

  return (
    <div>
        <Display header={'Anecdote of the day'} text={anecdotes[selected]} />
        <Display header={''} text= {'Has ' + pointer[selected] + ' votes'}/>
        <Button handleClick={voteRandomAnecdote} text={'Vote'} />
        <Button handleClick={generateRandomAnecdote} text={'Next anecdote'} />

        <Display header={'Anecdote with most votes'} text={anecdotes[mostVotedPointer]} />
    </div>
  )
}

export default App