import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  console.log(filterData)
  return (
    <div>
      {
        filterData.map( (data) => (
          <button key={data.id} >{data.title}</button>
        ))
      }
      
        
    </div>
  )
}

export default Filter
