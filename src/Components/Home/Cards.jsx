import React from 'react'

const Cards = (props) => {
  const bgRoundStyle = {
    backgroundColor: props.bgColor,
  };
  return (
    <>
    <div className="card">
    <div className="card-body d-flex">
        <div className="card-img-left me-2 rounded-circle icon-round" style={bgRoundStyle}>
         {props.icon}
        </div>
        <div className="card-text-right mt-3">
        <p className="card-text m-0 text-muted">{props.text}</p>
        <p className="card-text m-0 text-bold">{props.amount}</p>
        <p className="card-text m-0 small">{props.details}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards
