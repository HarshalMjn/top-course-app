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
   <div>
     <Filter filterData={filterData}/>
   </div>
   <div>
     {
      loading ? (<Spinner/>) : (<Cards courses={courses}/>)
     }
   </div>

  </div>
  )
  
  
};

export default App;
