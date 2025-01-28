//icons
import { GiRoundStar } from "react-icons/gi";
//img
import imgbir from '../assets/img/media circle-box xs-circle (1).png'
import imgiki from '../assets/img/media circle-box xs-circle.png'

export default function Leading() {
  return (
    <div className="container">
      <h3 className="text-center my-5">Leading Medicine</h3>
      <p className="text-center text-body-tertiary">Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics </p>
      <div className="row my-5">
        <div className="col-md-4 p-5  border rounded-2">
        <div>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-body-tertiary me-2"/>
        </div>
        <p className="my-5 text-body-tertiary">Slate helps you see how many  more days you need to work to  reach your financial goal.</p>
        <img src={imgbir} alt="" />
        </div>
        <div className="col-md-4 p-5   border rounded-2">
        <div>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-body-tertiary me-2"/>
        </div>
        <p className="my-5 text-body-tertiary">Slate helps you see how many  more days you need to work to  reach your financial goal.</p>
        <img src={imgiki} alt="" />
        </div>
        <div className="col-md-4 p-5  border rounded-2">
        <div>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-warning me-2"/>
        <GiRoundStar className="text-body-tertiary me-2"/>
        </div>
        <p className="my-5 text-body-tertiary">Slate helps you see how many  more days you need to work to  reach your financial goal.</p>
        <img src={imgbir} alt="" />
        </div>
      </div>
    </div>
  )
}
