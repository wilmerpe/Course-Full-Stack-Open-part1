import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Header = props => <h1>{props.name}</h1>

const Estadistica = ({text, value}) => {
  if (text === "positive"){
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }


return (
  <tr><td>{text} {value}</td></tr>
)
}

const Estadisticas = ({clicks}) =>{
  const total = clicks.bien + clicks.neutro + clicks.mal
  const promedio = (clicks.bien * 1 + clicks.mal * -1)/ total
  const positivo = clicks.bien * (100/total)

  if (total === 0) {
    return (
      <div>
        Aún no hay ninguna valoración
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Estadistica text="bien" value={clicks.bien} />
          <Estadistica text="neutro" value={clicks.neutro} />
          <Estadistica text="mal" value={clicks.mal} />
          <Estadistica text="todo" value={total} />
          <Estadistica text="porcentaje" value={promedio} />
          <Estadistica text="positivo" value={positivo} />
        </tbody>
      </table>
    </div>
  )
}

const Boton = ({onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const App = () => {
    const [clicks, setClicks] = useState ({
      bien: 0, neutro: 0, mal: 0
    })

    const handleGoodClick = () =>
    setClicks({...clicks, bien: clicks.bien + 1})

    const handleNeutralClick = () =>
    setClicks({...clicks, neutro: clicks.neutro + 1})

    const handleBadClick = () =>
    setClicks({...clicks, mal: clicks.mal +1})

    return (
      <div>
        <Header name="Valoración Cafetería de Wilmer" />
        <Boton onClick={handleGoodClick} text='bien' />
        <Boton onClick={handleNeutralClick} text='neutro' />
        <Boton onClick={handleBadClick} text='mal' />
        <Header name="Estadisticas" />
        <Estadisticas clicks={clicks} />
      </div>
    )
  }

ReactDOM.render(<App />,
  document.getElementById('root')
)
