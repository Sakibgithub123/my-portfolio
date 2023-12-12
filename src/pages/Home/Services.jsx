import { HiTemplate } from "react-icons/hi";
import { SiWebtrees } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
const Services = () => {
    return (
        <div className="my-10 tracking-wide">
             <h1 data-aos="fade-left" className="text-4xl text-center font-bold  mb-20 text-[#008fff] divider divider-neutral">My Services</h1>
             <div className="flex flex-col lg:flex-row justify-between gap-10" data-aos="fade-right">
                <div className="bg-[#121217] p-5 text-center">
                    <h2 className="flex justify-center items-center text-[#008fff] font-bold text-2xl"><SiWebtrees /></h2>
                    <h3 className="text-[#ffffb5] font-bold text-lg py-3">Web Designer</h3>
                    <p className="text-[#8f8f8f] font-semibold text-base text-justify">Passionate web designer with a creative flair and technical expertise. 
                    Proficient in HTML, CSS, JavaScript and React. </p>
                    {/* Committed to delivering visually appealing and user-friendly websites that effectively communicate clients' messages. */}
                </div>
                <div className="bg-[#121217] p-5 text-center">
                    <h2 className="flex justify-center items-center text-[#008fff] font-bold text-2xl"><HiTemplate /></h2>
                    <h3 className="text-[#ffffb5] font-bold text-lg py-3">UI/UX Designer</h3>
                    <p className="text-[#8f8f8f] font-semibold text-base text-justify">Dedicated UI/UX designer with a keen eye for detail and a user-centric approach.
                     </p>
                     {/* Proficient in creating intuitive and aesthetically pleasing designs that enhance user experiences. */}
                </div>
                <div className="bg-[#121217] p-5 text-center">
                    <h2 className="flex justify-center items-center text-[#008fff] font-bold text-2xl"><FaAppStoreIos /></h2>
                    <h3 className="text-[#ffffb5] font-bold text-lg py-3">App Designer</h3>
                    <p className="text-[#8f8f8f] font-semibold text-base text-justify">Innovative app designer skilled in translating ideas into visually engaging and user-friendly interfaces.
                    </p>
                    {/* Proficient in mobile UI/UX design, with a focus on delivering seamless and memorable experiences for diverse users. */}
                </div>
             </div>
            
        </div>
    );
};

export default Services;