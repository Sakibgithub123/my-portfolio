import bannerImg1 from "../../assets/images/myimg.jpg"
import { TypeAnimation } from 'react-type-animation';
import { saveAs } from 'file-saver';

const Banner = () => {

   const downloadFile = () => {
        // Replace 'your_file_url' with the actual URL of your file
        const fileUrl = '../../assets/images/Md Sakibul Hasan(cv).pdf';
    
        // Fetch the file and save it using FileSaver.js
        fetch(fileUrl)
          .then(response => response.blob())
          .then(blob => {
            saveAs(blob, 'Md Sakibul Hasan(cv).pdf'); // Specify the desired file name
          })
          .catch(error => console.error('Error downloading file:', error));
      };



    return (
        <div className="hero min-h-screen bg-[#000000]" >
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <div className="w-full lg:w-2/5" data-aos="fade-left">
                    <img src={bannerImg1} className="rounded-lg w-full outline-none border-none  h-full  " />
                </div>
                <div className="w-1/5"></div>
                <div className="w-full lg:w-2/5" data-aos="fade-right">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Hi, I'm  Md Sakibul Hasan!",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Hi, I'm CSE Student!",
                            1000,
                            "Hi, I'm FrontEnd Developer!",
                            1000,
                            "Hi, I'm BackEnd Developer!",
                            1000
                        ]}
                        wrapper="h1"
                        speed={50}
                        style={{ fontSize: '30px', fontWeight: 'bold', color: '#008fff', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    {/* <h1 className="text-5xl font-bold text-[#008fff]">Box Office News!</h1> */}
                    <p className="py-6 text-[#8f8f8f] font-semibold text-justify leading-6 tracking-wide">Welcome to my web developer portfolio.
                    I'm a skilled  and creative wev developer with a passion for creating beautiful resposive
                     and user-friendly websites.I've worked on a variety of web projects.</p>
                    <button onClick={downloadFile} className="btn btn-outline text-[#8f8f8f] font-semibold">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;