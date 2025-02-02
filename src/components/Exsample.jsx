import  {useState} from "react"

export default function Exsample() {

    const [number, setnumber] = useState(0)

  return (
    <div className="container my-5">
      <p>{number}</p>
      <button onClick={()=>setnumber(0)} className="btn btn-primary rounded-5">boshlangich holat</button>
      <button onClick={()=>setnumber(number-1)} className="btn btn-danger">ayramiza</button>
      <button onClick={()=>setnumber(number+1)} className="btn btn-white">qoshamiza</button>
    </div>
  )
}
