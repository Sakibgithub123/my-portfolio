// import bannerImg from "../../assets/images/bg-remove-portfolio.png"
import { BsCheckAll } from "react-icons/bs";
import bannerImg2 from "../../assets/images/myimg2.jpg"
import bannerImg3 from "../../assets/images/portfolio.png"

const Aboutus = () => {
    return (
        <div className=" pt-10 pb-20">
            <div className="hero my-5 font-lato tracking-wide">
                <div className="hero-content flex-col justify-around lg:flex-row-reverse gap-10" data-aos="fade-right">
                    <div className="text-center lg:text-left lg:w-1/3" data-aos="fade-right">
                        <h3 className="text-2xl font-semibold text-[#008fff] my-5 italic">About Me</h3>
                        {/* <h3 className="text-4xl font-semibold text-[#bbb9b9] my-5 italic">Why Choose me?</h3> */}
                        <p className="py-3 text-[#7c7c7c] text-base font-medium leading-8">I'm a skilled  and creative wev developer with a passion for creating beautiful resposive
                     and user-friendly websites.Committed to crafting responsive and dynamic websites. Passionate about continuous learning and staying abreast of industry trends for optimal solutions.</p>
                        <h3 className="text-xl font-semibold text-[#ffb3ff] my-5 italic">Why Choose me...?</h3>
                        <ul className="space-y-2">
                            <li className="text-[#7c7c7c] text-base font-medium flex flex-row"><span className="text-3xl text-[#008fff] pr-2"><BsCheckAll></BsCheckAll></span><span>Web designer passionate about creating visually stunning and user-friendly websites.</span></li>
                            <li className="text-[#7c7c7c] text-base font-medium flex flex-row"><span className="text-3xl text-[#008fff] pr-2"><BsCheckAll></BsCheckAll></span><span>UI/UX designer dedicated to crafting seamless, engaging digital experiences for users.</span></li>
                            <li className="text-[#7c7c7c] text-base font-medium flex flex-row"><span className="text-3xl text-[#008fff] pr-2"><BsCheckAll></BsCheckAll></span><span>App designer creating intuitive, visually striking interfaces for seamless user experiences.</span></li>
                        </ul>
                        {/* <button className="bg-[#894444] ml-8 mt-5 text-[#fff] py-2 px-4 italic font-semibold rounded">Read More</button> */}
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/3 max-w-sm shadow-2xl bg-base-100 relative" data-aos="fade-left">
                        <div className="relative">
                            <img src={bannerImg2} className="w-96 border-4" alt="" />
                            <img className="card bg-base-100 md:w-60 border-4 shadow-2xl md:absolute md:top-40 md:left-60" src={bannerImg3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;