export default function NavbarHead() {
  return (
    <div className="container">
      <div className="row align-items-center header ">
      <div className="col-md-6 col-lg-6">
      <h1 className="text-white">Meet the Best Hospitalp</h1>
      <p className="text-white">We know how large objects will act, 
      but things on a small scale.</p>
      <button className="btn main-btn text-white me-3 rounded-5 py-2 px-3">Get Quote Now</button>
      <button className="btn rounded-5 text-white main-btn-radius py-2 px-3">Learn More</button>
      </div>
      <div className="col-md-6 col-lg-3 m-auto">
       <div className="mini-box rounded-3 p-5">
        <h2>Book Appointment</h2>
      
        <form action="">
        <label className="block" id="name">Name</label>
          <input className="block my-2 py-2 px-3" type="text" id="name" placeholder="Full Name"/> 
          <label className="block my-2 py-2 px-3" htmlFor="" id="email">Email address</label>
          <input className="block my-2 py-2 px-3" type="email" id="email" placeholder="example@gmail.com  "/>
          <label className="block my-2 py-2 px-3" htmlFor="" id="depart">Departement *</label>
          <input className="block my-2 py-2 px-3" type="text" id="depart" placeholder="Please Select"/>
          <label className="block my-2 py-2 px-3" htmlFor="" id="time">Time</label>
          <input className="block my-2 py-2 px-3" type="text" id="time" placeholder="4:00 Available"/>
        </form>
       </div>
      </div>
      </div>
    </div>
  )
}
