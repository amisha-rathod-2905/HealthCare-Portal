import { Link } from "react-router-dom";
import { doctors } from "../assets/assets";

const TopDoctors = () => {
    return(
        <div className=" flex flex-col items-center gap-4 py-16 text-gray-800">
            <h1 className='text-3xl font-semibold text-center'> Top Doctors to Book </h1>
            <p className='text-sm text-center'>Simply browse through our extensive list of trusted <br></br> doctors.</p>
           <div className="flex flex-wrap  ">
            {doctors.slice(0, 10).map((item, index) => (
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
                </Link>
            ))}
           </div>
           <a href="/doctors" className="bg-slate-300 rounded-lg px-10 p-2 " >more</a>
           
        </div>
    )
}
export default TopDoctors;