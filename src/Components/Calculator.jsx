import axios from "axios";
import { useState } from "react";

export default function Calculator() {
const [formResults, setFormResults] = useState({left: '', right: '', operation: ''})

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setFormResults((values) => ({ ...values, [name]: value }));
  console.log(formResults)
};

  return (
    <div>
  <form>
    <div className="bg-gray-200 w-screen flex flex-col md:flex-row justify-evenly p-12">
      <div>
        <p>Left Operand</p>
        <input
        required
        onChange={handleChange}
        value={formResults.left}
        type='number'
        name='left'

        className=" rounded" />
      </div>
      
      <div className="flex flex-col min-w-[200px] text-left p-1 mt-20">
        <div>
          <input onChange={handleChange} value='addition' type="radio" id="addition" name='operation'/>
          <label htmlFor="addition"> + Addition</label>
        </div>
        <div>
          <input onChange={handleChange} value='subtraction' type="radio" id="subtraction" name='operation'/>
          <label htmlFor="subtraction"> - Subtraction</label>
        </div>
        <div>
          <input onChange={handleChange} value='multiplication' type="radio" id="multiplication" name='operation'/>
          <label htmlFor="multiplication"> * Multiplication</label>
        </div>
        <div>
          <input onChange={handleChange} value='division' type="radio" id="division" name='operation'/>
          <label htmlFor="division"> / Division</label>
        </div>
        <div>
          <input onChange={handleChange} value='remainder' type="radio" id="remainder" name='operation'/>
          <label htmlFor="remainder"> % Remainder</label>
        </div>
      </div>
     
      <div>
        <p>Right Operand</p>
        <input
         required
         onChange={handleChange}
         value={formResults.right}
         type='number'
         name='right'
        
        className=" rounded" />
      </div>
    </div>

    <div className="flex flex-col border border-black w-screen justify-center items-center md:items-start text-center md:text-left lg:justify-start p-12 bg-gray-200">
      <div className='bg-blue-500 w-[150px] flex justify-center items-center hover:bg-blue-600 cursor-pointer rounded text-white p-1 px-3 shadow-md'>Calculate</div>
      <div>Expression:</div>
      <div>Result:</div>
    </div>
    </form>
    </div>
  );
}
