import {Link} from 'react-router-dom';
import { specialityData } from "../assets/assets";

const SpeciallityMenu = () => {
    return(
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id="speciality">
            <h1 className='text-3xl font-semibold'>Find by Speciality</h1>
            <p className='text-sm text-center'>Simply browse through our extensive list of trusted doctors, <br></br>schedule your appointment hassle-free.</p>
           <div className='flex '>
            {specialityData.map((item, index) => ( 
                <Link key={index} to={`/doctors/${item.speciality}`}>
                    <div className='hover:-translate-y-2 duration-300'>
                    <img className='size-24 mx-3 ' src={item.image} alt="img" />
                    <p className='text-xs mx-3 '>{item.speciality}</p>
                    </div>
                </Link>
            ))}
           </div>
        </div>
    )
}
export default SpeciallityMenu;