import { useState } from 'react'

const App = () => {
    const [good, setGood]       = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad]         = useState(0)

    const increaseGood      = () => setGood(good+1)
    const increaseNeutral   = () => setNeutral(neutral+1)
    const increaseBad       = () => setBad(bad+1)

    const Button    = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
    const Display   = ({counter, text}) => <div>{text}: {counter} votes</div>

    return (
        <div>
            <h1>Give feedback</h1>
            <Button 
                handleClick={increaseGood} 
                text={'good'}
            />
            <Button 
                handleClick={increaseNeutral} 
                text={'Neutral'} 
            />
            <Button
                handleClick={increaseBad}
                text='Bad'
            />  
            <h1>Statistics</h1>
            <Display text={'Good'} counter={good}/>
            <Display text={'Neutral'} counter={neutral}/>
            <Display text={'Bad'} counter={bad}/>
        </div>

            
    )
}

export default App