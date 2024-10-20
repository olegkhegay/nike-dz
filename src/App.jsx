import React from 'react'
import './App.css'

const App = () => {
  return (
    <section>
      <div className="nike">

        <div className="nike1">
          <img className='air1' src="public/d6g0ph4-4c97a9fe-d74b-49c2-a51f-a6b7d95835ba.png" alt="" />
          <h3>Nike X OFF-Green</h3>
          <p>The 10th: Air Jordan  1 off-white - Chicago</p>
          <h3>$999</h3>
          <div className="buttons">
            <button>Buy now</button>
            <img className='star' src="public/star.png" alt="" />
          </div>
        </div>

        <div className="nike2">
          <img className='air2' src="public/i 1.png" alt="" />
          <h3>Nike X OFF-Red</h3>
          <p>The 10th: Air Jordan  1 off-white - Chicago</p>
          <h3>$1999</h3>
          <div className="buttons">
            <button>Buy now</button>
            <img className='star' src="public/star.png" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default App