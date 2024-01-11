import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Button = props => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Content = props => <p>{props.name} {props.counter}</p>

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header name='give feedback' />
            <Button handleClick={() => setGood(good + 1)} text='good'/>
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
            <Button handleClick={() => setBad(bad + 1)} text='bad'/>
            <Header name='statistics' />
            <Content name='good' counter={good} />
            <Content name='neutral' counter={neutral} />
            <Content name='bad' counter={bad} />
        </div>
    )
}

export default App