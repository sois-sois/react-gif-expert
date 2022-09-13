import React from 'react'
import '../helpers/GifGrid.css'

export const GifItem = ({ id, title, url}) => {
  return (
    <>
        <div className="card">
            <img className="imgescss" src={url} alt="Avatar"></img>
            <div className="container">
                <p>{title}</p>
            </div>
        </div>
    </>
  )
}
