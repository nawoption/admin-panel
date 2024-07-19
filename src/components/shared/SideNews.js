
export default function SideNews({ image }) {
    return (
       <div className="my-2">
          <div className="row">
             <div className="col-md-6">
                <img src={image} className="card-img-top" alt="p1" />
             </div>
             <div className="col-md-6">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
          </div>
       </div>
    )
 }
 