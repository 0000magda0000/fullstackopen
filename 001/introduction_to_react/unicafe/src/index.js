import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
const Statistics = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({action, text, style }) => (
<div>
  <button className={style} onClick={action}>{text}</button>
</div>
)


const App = () => {
  const feedback = 'Give Feedback';
  const statistics= "Statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const confirm = 'confirm';
  const average = () => {
    let total = 0
    total = (good * 1 + neutral* 0 + bad * -1) / (good + neutral + bad) * 100
    return total.toFixed(3)
  };

 const positive = () => {
  let total = 0
  total = good  / (good + neutral + bad) * 100
  return total.toFixed(3)
  };


  return (
    <div>
      <h1>{feedback}</h1>
      <div className="buttons">
          <Button style={`btn-default ${confirm}`} action={() => setGood(good + 1)} text='Good' />
          <Button style={`btn-default ${confirm}`} action={() => setNeutral(neutral + 1)} text='Neutral' />
          <Button style={`btn-default ${confirm}`} action={() => setBad(bad + 1)} text='Bad' />
      </div>
      { good === 0 && neutral === 0 && bad === 0 ?
      <div className="statistic">
        <h1>{statistics}</h1>
        <table>
          <thead>
            <tr>
              <th>No feedback given</th>
            </tr>
          </thead>
        </table>
      </div>
      :
      <div className="statistic">
        <h1>Statistics</h1>
        <table>
          <thead>
          </thead>
          <tbody>
            <Statistics text='good:' value={good} />
            <Statistics text='neutral:' value={neutral} />
            <Statistics text='bad:' value={bad} />
            <Statistics text='all:' value={good + neutral + bad} />
            <Statistics text='average:' value={`${average()}%`} />
            <Statistics text='positive:' value={`${positive()}%`} />
          </tbody>
        </table>
      </div>
      }
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
