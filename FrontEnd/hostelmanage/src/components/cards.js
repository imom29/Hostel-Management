import React from 'react'
import '../css/cards.css'

const cards = () => {
    return (
        <div className="holder">
        <div className="grid">
        <div className="grid-item">
          <div className="card">
            {/* <img className="card-img" src="./img/rome.jpg" alt="Rome" /> */}
            <div className="card-content">
              <h1 className="card-header">Register</h1>
              <p className="card-text">
                Rome is known for its stunning <strong> architecture</strong>,
                with the Colleseum, Pantheon, and Trevi Fountain as the main
                attractions.
              </p>
              <button className="card-btn">Log In <span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            {/* <img
              className="card-img"
              src="./img/grand-canyon.jpg"
              alt="Grand Canyon"
            /> */}
            <div className="card-content">
              <h1 className="card-header">Visit Hostel</h1>
              <p className="card-text">
                One of the world's natural wonders, the iconic Grand Canyon draws
                oohs and aahs from visitors perched at the edge of its
                <strong>towering cliffs</strong>.
              </p>
              <button className="card-btn">Visit <span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            {/* <img className="card-img" src="./img/maldives.jpg" alt="Maldives" /> */}
            <div className="card-content">
              <h1 className="card-header">Maldives</h1>
              <p className="card-text">
                The Maldives are known for their
                <strong>natural environment</strong> including the blue ocean,
                white beaches, and clean air, attracting tourists.
              </p>
              <button className="card-btn">Visit <span>&rarr;</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>    
    )
}

export default cards
