import {assets} from "../assets/assets.js"; 

const BookAppointment = () => {
    return(
        <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg mb-10 pl-20">
            {/**left div */}
            <div className="flex flex-col items-start justify-center">
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment <br></br>
                With 100+ Trusted <br></br> Doctors</p>
                <a href="/login" className="flex item-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm md:m-0 hover:scale-105 hover:transition-all ">Create Account </a>
                </div>
             {/**right div */}
             <div className="pl-32">
                <img className=" h-96 rounded-lg" src={assets.appointment_img} alt="header img" />
             </div>
        </div>
    )
}

export default BookAppointment;