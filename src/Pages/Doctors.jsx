import {doctors} from "../assets/assets.js";
import {useParams, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const Doctors = () => {
  const navigate = useNavigate();
const {speciality} = useParams();

 const [filterDoc, setFilterDoc] = useState([]);
 console.log("Speciality:", speciality);
console.log("Filtered Doctors:", filterDoc);


const applyFilter = () => {
  if (speciality) {
    setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
  } else {
    setFilterDoc(doctors);
  }
}

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])


    return(
      <div>
        <p className="text-gray-600">Browse through the doctors specialist.</p>
        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
            {/* left side */}
            <div className=" flex text-slate-600 gap-4 text-sm flex-col">
                <p onClick={() => navigate(speciality === "General physician" ? "/doctors" : "/doctors/General physician")} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General Physician</p>
                <p onClick={() => navigate(speciality === "Gynecologist" ? "/doctors" : "/doctors/Gynecologist")} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologiest</p>
                <p onClick={() => navigate(speciality === "Dermatologist" ? "/doctors" : "/doctors/Dermatologist")} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermetologiest</p>
                <p onClick={() => navigate(speciality === "Pediatricians" ? "/doctors" : "/doctors/Pediatricians")} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
                <p onClick={() => navigate(speciality === "Neurologist" ? "/doctors" : "/doctors/Neurologist")} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neourologist</p>
                <p onClick={() => navigate(speciality === "Gastroenterologist" ? "/doctors" : "/doctors/Gastroenterologist")} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
            </div>
            <div>
            <div className="flex flex-wrap  ">
              {
                filterDoc.map((item, index) => {
                return ( 
                  <Link key={index} to={`/appointment/${item._id}`}>
                     <div className=" items-center py-2 mb-4 mx-2 items-center border-solid border border-emerald-200 rounded-xl hover:-translate-y-2 duration-300">
                    <img className="size-60 bg-emerald-50" src={item.image} alt="img" />
                    <div className="ps-2.5">
                        <div className="flex items-center p-2">
                        <p className="w-2 h-2 bg-green-500 rounded-full "></p>
                        <p className="text-green-600 px-2"> Available</p>
                        </div>
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-sm text-gray-800"g>{item.speciality}</p>           
                    </div>    
                    </div>
                    
                   
                </Link> )
                })
              }
               </div>
            </div>
          
        
        </div>
        </div>
    )
}


export default Doctors;