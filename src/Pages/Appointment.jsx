import {useParams} from "react-router-dom";
import {assets, doctors} from "../assets/assets.js";
import { useState, useEffect } from "react";

const Appointment = () => {

  const {docId} =  useParams();

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = () => {
   const docInfo = doctors.find(doc => doc._id == docId);
   setDocInfo(docInfo);
   console.log(docInfo);
}
    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);


    return(
        <div>
            {/* * doctors details */}
            <div className="flex flex-col sm:flex-row"> 
            <div className="p-2">
                <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="img" />
            </div>
            <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bh-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                <h1>{docInfo.name} <img src={assets.verified_icon} alt="" /></h1>
                <p>{`${docInfo.degree}- ${docInfo.speciality}`} <button>{docInfo.experience}</button></p>
                <p>about <img src={assets.info_icon} alt="" /></p>
                <p>{docInfo.about} </p>
                <p>Appointment Fee : {docInfo.fees}</p>
            </div>
            </div>
        </div>
    );
}

export default Appointment;