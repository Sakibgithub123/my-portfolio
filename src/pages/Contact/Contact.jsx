// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// 8f8f8f
const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };
    
    return (
        <div className="py-20 max-w-2xl mx-auto">
            <div className="bg-[#121217] rounded-lg p-10 tracking-wide" data-aos="flip-up">
            <h1 className="text-4xl text-center font-bold  text-[#8f8f8f] tracking-wide">Contact Me</h1>
                <form  className="space-y-4" >
                {/* ref={form} onSubmit={sendEmail} */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-[#8f8f8f] ">Name :</span>
                        </label>
                        <input type="text" name="user_name" placeholder="Type here" className="border border-[#121217] py-3 px-2 font-semibold w-full " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-[#8f8f8f] ">Company Name :</span>
                        </label>
                        <input type="text" name="company_name" placeholder="Type here" className="border border-[#121217] py-3 px-2 font-semibold w-full " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-[#8f8f8f] ">Email :</span>
                        </label>
                        <input type="email" placeholder="Type here" name="user_email" className="border border-[#121217] py-3 px-2 font-semibold w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-[#8f8f8f] ">Message :</span>
                        </label>
                        <textarea name="message" placeholder="Write here..." className="border border-[#121217] py-3 px-2 font-semibold w-full"></textarea>
                    </div>
                    <div className="text-center">
                        <button className="py-2 px-7 font-semibold bg-[#8f8f8f] text-[#121217]">Sent</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Contact;