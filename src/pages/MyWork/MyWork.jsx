import { Link } from "react-router-dom";
import p1 from "../../assets/images/p1.png"
import p2 from "../../assets/images/p2.png"
import p3 from "../../assets/images/p3.png"
import p4 from "../../assets/images/p4.png"
// import p5 from "../../assets/images/p5.png"
// import p6 from "../../assets/images/p6.png"

const MyWork = () => {
    return (
        <div>
        <h1 className="text-4xl text-center font-bold  mb-20 mt-10 text-[#008fff] ">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 p-5 lg:p-0">
            <div className="card bg-base-100 shadow-xl image-full" data-aos="flip-left">
                <figure><img src={p1} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <p className="text-base text-[#bbb9b9] font-semibold">Parcel Management</p>
                        <p className="text-base text-[#bbb9b9] font-semibold">Using React, Node,Express, Mongodb</p>
                        <button className="py-2 px-7 font-semibold bg-[#008fff] rounded-lg text-[#ffffff]">
                            <Link to={'https://parcel-management-client-80793.web.app'}>See</Link>
                            </button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl image-full" data-aos="flip-left">
                <figure><img src={p2} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    <p className="text-base text-[#bbb9b9] font-semibold">Restaurent Project</p>
                        <p className="text-base text-[#bbb9b9] font-semibold">Using React, Node,Express, Mongodb</p>
                    <button className="py-2 px-7 font-semibold bg-[#008fff] rounded-lg text-[#ffffff]">
                        <Link to={'https://restautant-management-react.web.app'}>See</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl image-full" data-aos="flip-left">
                <figure><img src={p3} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    <p className="text-base text-[#bbb9b9] font-semibold">Car Shop Project</p>
                        <p className="text-base text-[#bbb9b9] font-semibold">Using React, Node,Express, Mongodb</p>
                    <button className="py-2 px-7 font-semibold bg-[#008fff] rounded-lg text-[#ffffff]">
                        <Link to={'https://car-brand-shop.web.app'}>See</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl image-full" data-aos="flip-left">
                <figure><img src={p4} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    <p className="text-base text-[#bbb9b9] font-semibold">Music Festivals Concert</p>
                        <p className="text-base text-[#bbb9b9] font-semibold">Using React, Tawlind, Daisyui</p>
                    <button className="py-2 px-7 font-semibold bg-[#008fff] rounded-lg text-[#ffffff]">
                        <Link to={'https://65243a564bd22913240e5862--unique-pegasus-9c4c76.netlify.app/'}>See</Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={p6} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    <p className="text-base text-[#008fff] font-semibold">Blood Donation Website</p>
                    <p className="text-base text-[#008fff] font-semibold">Using React, Tawlind, Daisyui</p>
                    <button className="py-2 px-7 font-semibold bg-[#008fff] rounded-lg text-[#ffffff]">
                        <Link to={'https://fastidious-stardust-edf1fe.netlify.app'}>See</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={p5} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    <p className="text-base text-[#008fff] font-semibold">Course Registration Page</p>
                    <p className="text-base text-[#008fff] font-semibold">Using Js, Tawlind, Daisyui</p>
                    <button className="py-2 px-7 font-semibold bg-[#008fff] rounded-lg text-[#ffffff]">
                        <Link to={'https://incomparable-cuchufli-e7882a.netlify.app'}>See</Link>
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
        </div>
    );
};

export default MyWork;