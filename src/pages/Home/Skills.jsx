import ProgressBar from 'react-animated-progress-bar';
import html from '../../assets/skill/html.webp'
import css from '../../assets/skill/css.webp'
import bootstrap from '../../assets/skill/bootstrap.jpg'
import tawlind from '../../assets/skill/tawlind.webp'
import daisyui from '../../assets/skill/daisyui.jpg'
import jquery from '../../assets/skill/jquery.jpg'
import react from '../../assets/skill/react.jpg'
import js from '../../assets/skill//js.jfif'
import node from '../../assets/skill/node.jpg'
import expressjs from '../../assets/skill/expressjs.png'
import mongodb from '../../assets/skill/mongodb.png'
import php from '../../assets/skill/php2.jpg'
import laravel from '../../assets/skill/laravel.jpg'
import mysql from '../../assets/skill/mysql.jpg'



const Skills = () => {
    return (
        <div className='tracking-wide mb-20'>
            <h1 data-aos="fade-left" className="text-4xl text-center font-bold  my-20 text-[#008fff] divider divider-neutral">My Skills</h1>
            <h3 data-aos="fade-right" className="text-lg text-start font-bold  mb-5 border-b-[#008fff] text-[#008fff]">FrontEnd -</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4 lg:p-0' data-aos="fade-right">
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={html} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                    <h2 className="card-title text-[#000000]" >HTML</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="99" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={css} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">  CSS </h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="90" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60   bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={bootstrap} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]"> BootStrap </h2>
                        <div className='font-bold'>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="90" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60   bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={tawlind} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">Tawlind CSS</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="90" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={daisyui} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">DaisyUi</h2>
                        <ProgressBar width="180px" height="10px"  rect fontColor="#121217"  percentage="90" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff" trackBorderColor="gray"
                        />
                    </div>
                </div>
                <div className="card lg:w-60 h-60   bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={js} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">JavaScript</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60   bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={react} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">React Js</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="80" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure
                    >
                        <img src={jquery} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">jQuery</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <h3 data-aos="fade-left" className="text-lg text-start font-bold mt-10 mb-5 border-b-[#008fff] text-[#008fff]">BackEnd -</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4 lg:p-0' data-aos="fade-left">
                <div className="card lg:w-60 md:h-60  bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={node} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">Node Js</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure>
                        <img src={expressjs} alt="Shoes" className="rounded-xl w-[full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">Express Js</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure >
                        <img src={mongodb} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">Mongodb</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={php} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">PHP</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure>
                        <img src={laravel} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">Laravel</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
                <div className="card lg:w-60 h-60  bg-[#8f8f8f] shadow-xl">
                    <figure>
                        <img src={mysql} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body p-0 mt-4 items-center text-center">
                        <h2 className="card-title text-[#000000]">MySql</h2>
                        <div className='font-bold'>
                        <ProgressBar  fontWeight="bold" width="200px" height="11px"  rect fontColor="#121217"  percentage="70" rectPadding="1px" rectBorderRadius="20px"  trackPathColor="gray"
                            bgColor="#008fff"  trackBorderColor="gray"
                        />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;