import { useState } from "react"


export default function TgBot() {

    const token = "7348058956:AAF66AdH5GbymNICMG1WEBL0LmVdKWY6sO8"
    const botid = "6991682621"
    const[name, setname] = useState("")
    const[email, setemail] = useState("")
    const[tanlash, setTanlash] = useState("")
    const[vaqt, setVaqt] = useState("")

    const yuborish = (e)=>{
        e.preventDefault()
         const xabar = `
            name:${name}
            email:${email}
            tanlash:${tanlash}
            vaqt:${vaqt}
         `
         fetch(`https://api.telegram.org/bot${token}/sendMessage`,{
            
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body: JSON.stringify({
            chat_id:botid,
            text:xabar
         })
         }) 
         .then((recponce)=>recponce.json())
         .then(rec=>{
            if(rec){  
                alert("ketti")
            }
         })}

    return (
        <div>
            <form action="">
                <label className="block" id="name">Name</label>
                <input onChange={(e)=>setname(e.target.value)} className="block my-2 py-2 px-3" type="text" id="name" placeholder="Full Name" />
                <label className="block my-2 py-2 px-3" htmlFor="" id="email">Email address</label>
                <input onChange={(e)=>setemail(e.target.value)} className="block my-2 py-2 px-3" type="email" id="email" placeholder="example@gmail.com  " />
                <label className="block my-2 py-2 px-3" htmlFor="" id="depart">Departement *</label>
                <input onChange={(e)=>setTanlash(e.target.value)} className="block my-2 py-2 px-3" type="text" id="depart" placeholder="Please Select" />
                <label className="block my-2 py-2 px-3" htmlFor="" id="time">Time</label>
                <input onChange={(e)=>setVaqt(e.target.value)} className="block my-2 py-2 px-3" type="number" id="time" placeholder="4:00 Available" />
                <button onClick={(e)=>yuborish(e)} className="btn btn-primary w-100 my-3 p-2">Book Appointment</button>
            </form>
        </div>
    )
}
