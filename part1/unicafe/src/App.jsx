import { useState } from 'react'

const Button    = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistics = (props) => {
    const all = props.data.filter((statistic) => statistic.text === 'All')
    if (all[0].value === 0) {
        return (
            <div>
                No feedback given.
            </div>
        )
    }
    return (
        <div>
            {props.data.map((statistic) => (
                <div key={statistic.id}>
                    {statistic.text}: {(isNaN(statistic.value)) 
                                            ? 0 
                                            : statistic.value} {(statistic.text === 'Positive') 
                                                                    ? '%' 
                                                                    : ''}
                </div>
            ))}
        </div>
    )
}

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

    const statistics = [
        {
            id: 1,
            text: 'Good',
            value: good
        },
        {
            id: 2,
            text: 'Neutral',
            value: neutral
        },
        {
            id: 3,
            text: 'Bad',
            value: bad
        },
        {
            id: 4,
            text: 'All',
            value: all
        },
        {
            id: 5,
            text: 'Average',
            value: average/all
        },
        {
            id: 6,
            text: 'Positive',
            value: good/all
        },
    ]

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
            <Statistics data={statistics} />
        </div>

            
    )
}

export default App