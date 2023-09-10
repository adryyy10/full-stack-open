import { useState } from 'react'

const App = () => {
    const [good, setGood]       = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad]         = useState(0)
    const [all, setAll]         = useState(0)
    const [average, setAverage] = useState(0)

    const increaseGood = () => {
        setGood(good+1)
        setAll(all+1)
        setAverage(average+1)
    }
    const increaseNeutral = () => {
        setNeutral(neutral+1)
        setAll(all+1)
    }
    const increaseBad = () => {
        setBad(bad+1)
        setAll(all+1)
        setAverage(average-1)
    }

    const Button    = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
    const Display   = ({counter, text}) => {
        return (all === 0) 
            ? <div>{text}: 0</div> 
            : (text === 'Positive')
                ? <div>{text}: {counter*100}%</div>
                : <div>{text}: {counter}</div>
    }

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
            <Display text={'All'} counter={all}/>
            <Display text={'Average'} counter={average/all}/>
            <Display text={'Positive'} counter={good/all}/>
        </div>

            
    )
}

export default App