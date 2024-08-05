

import React from 'react';
import Image from 'next/image';
const GhostwritingBanner = (props) => {
  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };



  return (
    <section className='w-full bg-white text-[#1d1d1f] py-4 xs:py-0 font-secondary'>
      <div className='relative -z-0'>
        <div
          className="absolute md:hidden sm:hidden xs:hidden top-0 right-28 w-[650px] h-[500px] bg-no-repeat bg-right md:bg-center"
          style={{ backgroundImage: "url('/assets/images/newimg/blog-banner.png')" }}
        ></div>
      </div>
      <div className=' container max-w-7xl lg:max-w-6xl mx-auto text-left justify-center items-center pt-28 xs:py-0 xs:pt-10 xs:pb-5' >
        <div className='grid md:grid sm:grid-cols-1 xs:grid-cols-1 items-center' >
          <div className='w-[80%] sm:w-[100%] xs:w-[100%] xs:py-5 xs:px-6 g-2 sm:text-center sm:px-10 xs:text-center md:text-center '>
            <h1 className='w-[50%] font-primary font-bold leading-[60px] text-5xl sm:text-4xl xs:text-3xl sm:w-[100%] xs:w-[100%] md:w-[100%]'>
              {props.title}
            </h1>
            <p className='w-[50%] mt-3 sm:w-[100%] xs:w-[100%] md:w-[90%] md:mx-auto xs:mx-auto'>
              {props.dec}
            </p>
            <div className='w-[40%] grid grid-cols-2 grid-rows-1 gap-5 py-5 md:mx-auto xs:mx-auto sm:w-[80%] sm:mx-auto xs:w-[100%]'>
            <a href="tel:800-781-9093" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                  <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
            </div>
          </div>

          <div className='xl:hidden 2xl:hidden lg:hidden mx-auto justify-center items-center text-center md:pb-0 sm:w-[70%] sm:pt-10 xs:w-[90%] xs:pb-0 md:mt-12 xs:mt-12 ' >
              <Image quality={95} src={'/assets/images/newimg/blog-banner.png'} width={600} height={600} alt='blog-banner ' />
            </div>
            <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >

            </div>
        </div>




      </div>

    </section>
  );
};

export default GhostwritingBanner;
