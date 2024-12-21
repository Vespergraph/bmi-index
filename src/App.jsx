import { useState } from 'react'
import Form from './Form'

function App() {
  const [bmi,setBmi] = useState(0)
  const calculateBMI= (weight,height) =>{
    const bmi = ((parseInt(weight) / parseInt(height)**2)*10000).toFixed(1);
    setBmi(bmi)
  }
  return (<main className='section-center'>
    <Form calculateBMI={calculateBMI}/>
    <p className='items'>Your bmi is equal to: {bmi}</p>
    </main>
  )
}

export default App
