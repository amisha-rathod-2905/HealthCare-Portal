import {assets} from "../assets/assets.js";

const Footer = () => {
    return(
        <div className="flex flex-row flex-wrap py-24">
            <div className="flex flex-col pr-52">
            <img className="w-44 cursor-pointer pb-4" src={assets.logo}  />
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing ept.<br></br>
            Error unde, consequuntur molestias culpa voluptatum <br></br> eaque
            quam asperiores iusto distinctio optio apas itaque <br></br>
            accusantium maiores ipsa vel tenetur cumque,<br></br> quidem vero!</p>
            </div>
            <div className="flex flex-col pr-40">
                <h1 className="font-semibold py-4">Company</h1>
                <div className="text-gray-600 text-sm">
                <p className="p-2">Home</p>
                <p className="p-2">About us</p>
                <p className="p-2">Delivery</p>
                <p className="p-2">Privacy Policy</p>
                </div>
            </div>
            <div className="flex flex-col pr-20">
                <h1 className="font-semibold py-4">Get in touch</h1>
                <div className="text-gray-600 text-sm">
                <p className="p-2">+0000-00-0000</p>
                <p className="p-2">amisharathod@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;