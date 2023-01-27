import { useState } from "react"
import { usefetchContext } from "../UserProvider"

const MoreInfo = () => {
const data = usefetchContext()
const data2 = use2fetchContext()

return <>
<h2>Componente hijo</h2>
{data.map(item => (<div key={item.id}>{item.id}</div>))}
</>
}
export default MoreInfo
