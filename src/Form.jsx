import { useState } from "react"

const Form = ({calculateBMI}) => {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)

  const handleSubmit = (e)=>{
    e.preventDefault();
    calculateBMI(weight,height);
  }

  return (<>
    
    <form onSubmit={handleSubmit}>
    <h4>BMI Calculator</h4>
      <div><p className="labels">Enter your Weight:</p>
      <input className="form-input" type="text" onChange={(e)=>setWeight(e.target.value)}/>
      </div>
      <div> <p className="labels">Enter your Height:</p> 
      <input className="form-input" type="text" onChange={(e)=>setHeight(e.target.value)}/>
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
    </>
  )
}
export default Form