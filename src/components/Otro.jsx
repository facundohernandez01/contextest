import { useState } from "react"
import { usefetchContext, use2fetchContext } from "../UserProvider"


const Otro = () => {

const data = usefetchContext(null)
const data2 = use2fetchContext(null)

const [datos, setDatos] = useState([data]);


return (
  <div className="App">
       <label>
        <input
          type="checkbox"
          checked={datos === data2}
          onChange={(e) => setDatos(e.target.checked ? data2 : data)}
        />
        Mode
      </label>

    <p>  {datos.map((item) => item.id )}</p>

  </div>
);
}

export default Otro
