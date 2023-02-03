import React from 'react'


const NewSeacrch = (props) => {

    let img = `http://source.unsplash.com/400x300/?${props.name}`

  return (
    <>
      <img src={img} alt="dlt" />
    </>
  )
}

export default NewSeacrch


