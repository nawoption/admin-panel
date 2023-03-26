import React,{useContext} from 'react'
import { TitleContext } from './TestContext'
export default function CCompo() {
    const {title,changeTitle} = useContext(TitleContext)
  return (
    <>
        <h1>C Component title : {title}</h1>
        <button onClick={changeTitle}>Change C Compo</button>
    </>
  )
}
