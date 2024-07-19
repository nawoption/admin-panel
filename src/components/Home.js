import React, { useEffect, useState } from "react";
import Nav from "./shared/Nav";
import Header from "./shared/Header";
import p1 from "../statics/p1.jpg";
import sideads from "../statics/sideads.jpg";

import HotNew from "./shared/HotNew";
import HomeAffair from "./shared/HomeAffair";
import SideNews from "./shared/SideNews";
import SideVideoNews from "./shared/SideVideoNews";

export default function Home() {
  const [hotnews , setHotnews] = useState([]);
  const [localnews , setLocalnews] = useState([]);
  useEffect(()=>{
    loadHotnews();
    loadLocalnews();
  },[]);
  const loadHotnews = async () => {
    const response = await fetch("https://nodejs-media.onrender.com/posts/tag/644f73176ca3969b9830ffff");
    const resData = await response.json();
    setHotnews(resData.result);
  };
  const loadLocalnews = async () => {
    const response = await fetch("https://nodejs-media.onrender.com/posts/tag/644f73176ca3969b9830ffff");
    const resData = await response.json();
    setLocalnews(resData.result);
  };
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <div className="bg-dark mb-2 p-2 d-flex justify-content-between">
            <button className="btn btn-danger">Hot News</button>
            <button className="btn btn-danger">Read More</button>
          </div>
          <div className="row">
            {hotnews.length>0&&hotnews.map(post=><HotNew key={post._id} post={post} />)}
          </div>
        </div>
        <div className="col-md-4">
          <img src={sideads} width='100%' />
        </div>
      </div>

      <div className="row mt-2">
            <div className="col-md-8">
               <div className="mb-3 bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">ပြည်တွင်း</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               <div className="row">
                {localnews.length>0&&localnews.map(post=><HomeAffair key={post._id} post={post} />)}
               </div>
            </div>
            <div className="col-md-4">
               <div className="mb-3 bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">Hot NEWS</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               <SideNews image={p1} />
               <SideNews image={p1} />
               <SideNews image={p1} />
               <div className="mt-3 bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">TV NEWS</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               <SideVideoNews/>
            </div>
         </div>
    </div>
  );
}
