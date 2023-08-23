import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  console.log(filterData)
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-centre">
      {
        filterData.map( (data) => (
          <button
          className={`text-lg px-2 py-1 rounded-md font-medium
          text-white bg-black hover:bg-opcaity-50 border-2 ${
            category === data.title
            ? "bg-opacity-60 border-white"
            : "bg-opacity-40 border-transparent"
          }transition-all duration-300`}
           key={data.id} >{data.title}</button>
        ))
      }
      
        
    </div>
  )
}

export default Filter