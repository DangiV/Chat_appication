import React, { useState } from 'react'
import NewSeacrch from './NewSeacrch'

const SearchFil = () => {
    const [data , setData] = useState('')

  return (
    <div>
      <h2>Hello search</h2>
      <input type="text" placeholder='Search' value={data} onChange={(e)=> setData(e.target.value)} />
    
    {data === "" ? null  : <NewSeacrch name={data}/> }
    

    </div>
  )
}

export default SearchFil
