import icon1 from "../../assets/icon/icon1.png"
import icon2 from "../../assets/icon/icon2.png"
import icon3 from "../../assets/icon/icon3.png"

const Education = () => {
    return (
        <div className="my-10 tracking-wide">
            <h1 data-aos="fade-left" className="text-4xl text-center font-bold  mb-20 text-[#008fff] divider divider-neutral">My Education</h1>
            <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between  tracking-wide" data-aos="fade-right">
                <div className="text-center   rounded-lg shadow-xl p-5 border border-[#bbb9b9]">
                    <div className="avatar bg-[#bbb9b9] p-2 rounded-full">
                        <div className="w-24 ">
                            <img src={icon1} />
                        </div>
                    </div>
                    <h3 className="text-xl text-[#ffffb5] font-bold border-b-2 py-4 ">Secondary School Certificate</h3>
                    <div className="text-center ">
                        <p className="text-lg text-[#bbb9b9] font-semibold py-3 ">Chunakhali High School, Amtali, Barguna</p>
                        <div className="flex flex-row gap-10 justify-center">
                        <p className="text-base text-[#ffb3ff] font-medium">GPA : 4.89 </p>
                        <p className="text-base text-[#ffb3ff] font-medium">Year : 2015 </p>
                        </div>
                    </div>
                </div>
                <div className="text-center   rounded-lg shadow-xl p-5 border border-[#bbb9b9]">
                    <div className="avatar bg-[#bbb9b9] p-2 rounded-full">
                        <div className="w-24 ">
                            <img src={icon2} />
                        </div>
                    </div>
                    <h3 className="text-xl text-[#ffffb5] font-bold border-b-2 py-3">Higher Secondary Certificate</h3>
                    <div className="text-center">
                        <p className="text-lg text-[#bbb9b9] font-semibold py-4">Amtali Govt. College, Amtali, Barguna</p>
                        <div className="flex flex-row justify-center gap-10">
                        <p className="text-base text-[#ffb3ff] font-medium">GPA : 3.72 </p>
                        <p className="text-base text-[#ffb3ff] font-medium">Year : 2016-17 </p>
                        </div>
                    </div>
                </div>
                <div className="text-center   rounded-lg shadow-xl p-5 border border-[#bbb9b9]">
                    <div className="avatar bg-[#bbb9b9] p-2 rounded-full">
                        <div className="w-24 ">
                            <img src={icon3} />
                        </div>
                    </div>
                    <h3 className="text-xl text-[#ffffb5] font-bold tracking-wide border-b-2 py-4 ">Bachelor of Science in CSE</h3>
                    <div className="text-center">
                        <p className="text-lg text-[#bbb9b9] font-semibold tracking-wide py-3">Stamford University Bangladesh</p>
                        <div className="flex flex-row justify-center gap-10 ">
                        <p className="text-base text-[#ffb3ff] font-medium">CGPA : Appered </p>
                        <p className="text-base text-[#ffb3ff] font-medium">Year : 2018-21 </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;