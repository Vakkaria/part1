import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Button = props => {
    return (
        <>
            <button onClick={props.handleGoodClick}> Good </button>
            <button onClick={props.handleNeutralClick}> Neutral </button>
            <button onClick={props.handleBadClick}> Bad </button>
        </>
    )}

const StatisticLine = props => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )}

const Statistics = props => {
    const { good, neutral, bad } = props
    if (good || neutral || bad ) {
        return (
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={good + neutral + bad} />
                    <StatisticLine text='average' value={(good - bad) / (good + bad + neutral)} />
                    <StatisticLine text='posirive' value={100 * (good / (good + bad + neutral)) + ' %'} />
                </tbody>
            </table>
        )} else {
        return (
            <table>
                <tbody>
                    <StatisticLine text='No feedback given' />
                </tbody>
            </table>
        )}
    }

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header name='give feedback' />
            <Button handleGoodClick={() => setGood(good + 1)} handleNeutralClick=
                {() => setNeutral(neutral + 1)} setBadClick={() => setBad(bad + 1)} />
            <Header name='statistics' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App