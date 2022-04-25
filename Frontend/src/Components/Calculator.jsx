import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";

export default function Calculator() {
  const [answer, setAnswer] = useState("");
  const [expression, setExpression] = useState("");
  const [loading, setLoading] = useState(false);
  const [formResults, setFormResults] = useState({
    left: "",
    right: "",
    operation: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormResults((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { left, right, operation } = formResults;
      const res = await axios.post("http://localhost:8000/calculate", {
        left,
        right,
        operation,
      });

      console.log(res.data.response);
      setAnswer(res.data.response);
      console.log(res.data.exp);
      setExpression(res.data.exp);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("axios error:", error.message);
    }

    console.log(formResults);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-200 w-screen h-full flex flex-col md:flex-row justify-center items-center md:justify-evenly p-12">
          <div>
            <p>Left Operand</p>
            <input
              required
              onChange={handleChange}
              value={formResults.left}
              type="number"
              name="left"
              className=" rounded p-1 shadow"
            />
          </div>

          <div className="flex flex-col min-w-[200px] text-left p-1 mt-20">
            <div>
              <input
                onChange={handleChange}
                value="+"
                type="radio"
                id="+"
                name="operation"
              />
              <label htmlFor="+"> + Addition</label>
            </div>
            <div>
              <input
                onChange={handleChange}
                value="-"
                type="radio"
                id="-"
                name="operation"
              />
              <label htmlFor="-"> - Subtraction</label>
            </div>
            <div>
              <input
                onChange={handleChange}
                value="*"
                type="radio"
                id="*"
                name="operation"
              />
              <label htmlFor="*"> * Multiplication</label>
            </div>
            <div>
              <input
                onChange={handleChange}
                value="/"
                type="radio"
                id="/"
                name="operation"
              />
              <label htmlFor="/"> / Division</label>
            </div>
            <div>
              <input
                onChange={handleChange}
                value="%"
                type="radio"
                id="%"
                name="operation"
              />
              <label htmlFor="%"> % Remainder</label>
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <p>Right Operand</p>
            <input
              required
              onChange={handleChange}
              value={formResults.right}
              type="number"
              name="right"
              className=" rounded p-1 shadow"
            />
          </div>
        </div>

        <div className="flex flex-col w-screen h-full justify-center items-center md:items-start text-center md:pl-16 md:text-left lg:justify-start p-12 bg-gray-200">
          <button
            type="submit"
            className="bg-blue-500 w-[150px] flex justify-center items-center hover:bg-blue-600 cursor-pointer rounded text-white p-1 px-3 shadow-md"
          >
            {loading ? <Loader /> : <p>Calculate</p>}
          </button>
          <div>Expression:{expression && <p>{expression}</p>} </div>
          <div>Result:{answer && !loading && <p>{answer}</p>}</div>
        </div>
      </form>
    </div>
  );
}
