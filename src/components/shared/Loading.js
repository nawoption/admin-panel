import React from 'react'
import loadingImg  from '../../statics/loading.gif';
export default function Loading() {
  return (
    <div className='loadingBox'>
        <img src={loadingImg} />
    </div>
  )
}
