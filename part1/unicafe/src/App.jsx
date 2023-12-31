import { useState } from 'react'

const Button    = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const StatisticLine = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.text}</td> 
            <td>{props.value}</td>
        </tr>
    )
}
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
            <table>
                <thead>    
                    <tr>
                        <th><h1>{props.title}</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((statistic) => (
                        <StatisticLine key={statistic.id} text={statistic.text} value={statistic.value} />
                    ))}
                </tbody>
            </table>
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
            <Statistics title={'Statistics'} data={statistics} />
        </div>

            
    )
}

export default App