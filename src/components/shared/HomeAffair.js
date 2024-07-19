import React from 'react'

export default function HomeAffair({ post }) {
   return (
      <div className="col-md-4 mb-3">
         <div className="card">
            <img src={`https://nodejs-media.onrender.com/uploads/${post.image}`} class="card-img-top" width="100%" height={150} />
            <div className="card-body">
               <h5 className="card-title">{post.title}</h5>
               <p className="card-text">{post.desc.substring(0,30)+"..."}</p>
               <a href="#" className="btn btn-info btn-sm float-end">
                  <i className="fa fa-eye text-white"></i>
                  <strong className="text-white px-1">Detail...</strong>
               </a>
            </div>
         </div>
      </div>
   )
}


