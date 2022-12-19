import { useState } from 'react';
import './App.css';
import PricingCard from './Components/PricingCard';
import data from './data.json'


function App() {
  const pricingData = data.data
  const [monthlySelection, setMonthlySelection] = useState(true)
  return (
    <div className='main-container'>
      <div className='pricing-container'>
        <div className='switch-plan'>
          <h1>Our Prices</h1>
          <p>We have the best options for you!</p>
          <div className="onoffswitch">
            <input onChange={() => setMonthlySelection(!monthlySelection)} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" />
            <label className="onoffswitch-label" for="myonoffswitch">
              <span className="onoffswitch-inner"></span>
              <span className="onoffswitch-switch"></span>
            </label>
          </div>
        </div>
        <div className='row'>
          {pricingData.map((d, i) => {
            return <PricingCard
              features={d.features}
              tools={d.tools}
              components={d.components}
              monthly={d.price.monthly}
              anually={d.price.anually}
              monthlySelection={monthlySelection}
              plan={d.plan}
              key={i} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;