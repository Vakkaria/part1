const Header = (header) => {
    return (
        <h1>{header.course}</h1>
    )
}

const Part = (part) => {
    return (
        <p>{part.part} {part.exercise}</p>
    )
}

const Content = (content) => {
    return (
        <>
            <Part part={content.part1} exercise={content.exercise1} />
            <Part part={content.part2} exercise={content.exercise2} />
            <Part part={content.part3} exercise={content.exercise3} />
        </>
    )
}

const Total = (total) => {
    return (
        <p>Number of exercises {total.exercise1 + total.exercise2 + total.exercise3}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercise1 = 10
    const part2 = 'Using props to pass data'
    const exercise2 = 7
    const part3 = 'State of a component'
    const exercise3 = 14

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} exercise1=
                {exercise1} exercise2={exercise2} exercise3={exercise3} />
            <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
        </div>
    )
}

export default App