import BookAppointment from "../Components/BookAppointment";
import Header from "../Components/Header";
import SpeciallityMenu from "../Components/SpeciallityMenu";
import TopDoctors from "../Components/TopDoctors";
const Home = () => {
    return(
        <div>
           <Header/> 
           <SpeciallityMenu />
           <TopDoctors/>
           <BookAppointment />
           
        </div>
    );
}

export default Home;