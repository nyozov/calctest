import React from "react";

export default function Calculator() {
  return (
    <div>
  
    <div className="bg-gray-200 w-screen flex flex-col md:flex-row justify-evenly p-12">
      <div>
        <p>Left Operand</p>
        <input className=" rounded" type="number" />
      </div>
      <form>
      <div className="flex flex-col min-w-[200px] text-left p-1 mt-20">
        <div>
          <input type="radio" id="addition" name='operation'/>
          <label for="addition"> + Addition</label>
        </div>
        <div>
          <input type="radio" id="subtraction" name='operation'/>
          <label for="subtraction"> - Subtraction</label>
        </div>
        <div>
          <input type="radio" id="multiplication" name='operation'/>
          <label for="multiplication"> * Multiplication</label>
        </div>
        <div>
          <input type="radio" id="division" name='operation'/>
          <label for="division"> / Division</label>
        </div>
        <div>
          <input type="radio" id="remainder" name='operation'/>
          <label for="remainder"> % Remainder</label>
        </div>
      </div>
      </form>
      <div>
        <p>Right Operand</p>
        <input className=" rounded" type="number" />
      </div>
    </div>

    <div className="flex flex-col border border-black w-screen justify-center items-center md:items-start text-center md:text-left lg:justify-start p-12 bg-gray-200">
      <div className='bg-blue-500 w-[150px] flex justify-center items-center hover:bg-blue-600 cursor-pointer rounded text-white p-1 px-3 shadow-md'>Calculate</div>
      <div>Expression:</div>
      <div>Result:</div>
    </div>

    </div>
  );
}
