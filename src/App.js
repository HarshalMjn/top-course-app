import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";


const App = () => {
   
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
      console.log(output)
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])




  return (
  <div className="min-h-screen flex flex-col">
   <div>
     <Navbar/>
   </div>
   
    <div className="bg-bgDark">

     <div>
       <Filter filterData={filterData}/>
       </div>
      <div className="w-11/12 max-w-[1200px] 
       mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       {
        loading ? (<Spinner/>) : (<Cards courses={courses}/>)
       }
      </div>

    </div>
  
  </div>
  )
  
  
};

export default App;
