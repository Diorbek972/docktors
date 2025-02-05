import { useState } from "react"


export default function GetTouch() {

  const token = "7348058956:AAF66AdH5GbymNICMG1WEBL0LmVdKWY6sO8"
  const botid = "6991682621"
  const [email, setemail] = useState("")

  const yuborish = (e) => {
    e.preventDefault()
    const xabar = `
              email:${email}

           `
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: botid,
        text: xabar
      })
    })
      .then((recponce) => recponce.json())
      .then(rec => {
        if (rec) {
          alert("ketti")
        }
      })
  }

  return (
    <section    >
      <div className="container">
        <div className="row align-items-center ">
          <div className=" text-inline text-ortada mt-5 col-md-6">
            <h1 className="text-white">Get In Touch</h1>
            <p className="text-white"> The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th </p>
          </div>
          <div className=" text-inline input-btn mt-auto col-md-6">
            <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Your Email" className="w-75 text-center" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-primary py-2 px-3 tel-with w-25" onClick={(e) => yuborish(e)} type="button" id="button-addon2" >Button</button>
          </div>
        </div>
      </div>
    </section>
  )
}
