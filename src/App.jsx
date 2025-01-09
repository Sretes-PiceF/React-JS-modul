import { useState, useEffect } from "react"

const App = () => {
  const [cars, setCars] = useState ([])

    const fetchCars = async () => {
      const response = await fetch ('https://64d358c767b2662bf3dc103e.mockapi.io/api/v1/cars')
      const data = await response.json();
      setCars(data)
    }
    useEffect (() => {
      fetchCars()
    }, [])
    return (
      <ul>
        {
          cars.map ((car) => (
            <li>
              {car.name}
            </li>
          ))
        }
      </ul>
    )
}

export default App

/* <div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
  </p> */