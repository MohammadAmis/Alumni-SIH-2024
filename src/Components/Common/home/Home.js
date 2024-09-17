import React from 'react'
import Carousel from './Carousel'
import { FaUniversity,FaUsers,FaCalendarAlt ,FaTag } from 'react-icons/fa';
import { MdCardGiftcard ,MdEvent  } from 'react-icons/md';



import img_story_1 from '../../../Assets/img_story_1.webp'
import news_1_img from '../../../Assets/news_1_img.jpg'
import news_2_img from '../../../Assets/news_2_img.jpg'

const Home = () => {
  return (
    <section>
      <Carousel/>
      <section className='grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 mt-4 ml-14 mr-14 mb-10 justify-center gap-8 border-b-2'>
        {/* success story section */}
          <div className=''>
              <h1 className='font-semibold text-[30px] m-5'>Success Stories</h1>
              <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5'>
                  <div className='m-5 h-[200px] w-[200px] '>
                    <img src={img_story_1} alt='' className='content-cover w-full h-full'/>
                  </div>
                  <div className='col-span-2 items-start justify-center text-wrap m-5'>
                      <h3 className='text-1xl font-light'>17-September-2024</h3>
                      <h1 className='text-2xl'>Harvard Is Up to the Challenge</h1>
                      <p className='text-1xl'>With the start of the fall semester, President Alan M. Garber AB ’77, PhD ’82 discusses the challenges and opportunities ahead.<span className='text-blue-400 cursor-pointer'>read more</span></p>
                  </div>
              </div>

              <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5'>
                  <div className='m-5 h-[200px] w-[200px] '>
                    <img src={img_story_1} alt='' className='content-cover w-full h-full'/>
                  </div>
                  <div className='col-span-2 items-start justify-center text-wrap m-5'>
                      <h3 className='text-1xl font-light'>17-September-2024</h3>
                      <h1 className='text-2xl'>Harvard Is Up to the Challenge</h1>
                      <p className='text-1xl'>With the start of the fall semester, President Alan M. Garber AB ’77, PhD ’82 discusses the challenges and opportunities ahead.<span className='text-blue-400 cursor-pointer'>read more</span></p>
                  </div>
              </div>

             <div> <button className='border-2 px-10 py-2 text-blue-400 rounded-lg mb-5 ml-[50%] translate-x-[-50%] hover:text-black hover:border-blue-400'>View All</button></div>

          </div>
          <div>
            {/* news and Opinion section */}
              <h1 className='font-semibold text-[30px] m-5'>News & Opinion</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                  <div className='m-5 h-[200px] w-[200px] '>
                    <img src={news_1_img} alt='' className='content-cover w-full h-full'/>
                  </div>
                  <div className='col-span-2 items-start justify-center text-wrap m-5 '>
                      <h3 className='text-1xl font-light'>17-September-2024</h3>
                      <h1 className='text-2xl text-wrap'>🚨 Empowering Our Students and Teachers for a Safer Tomorrow! 🚨</h1>
                      <p className='text-1xl'>🚨 Empowering Our Students and Teachers for a Safer Tomorrow! 🚨 Today, 26th August 2024, Anjuman BSK Girls' School hosted an impactful safety awareness session led by PSI Mr. Gabriel Fernandes from Nagpada Police Station...<span className='text-blue-400 cursor-pointer'>read more</span>  </p>

                  </div>

                  <div className='m-5 h-[200px] w-[200px] '>
                    <img src={news_2_img} alt='' className='content-cover w-full h-full'/>
                  </div>
                  <div className='col-span-2 items-start justify-center text-wrap m-5 '>
                      <h3 className='text-1xl font-light'>17-September-2024</h3>
                      <h1 className='text-2xl text-wrap'>Celebrating Anjuman I Islam's Landmark Achievement on the BSE Social Stock Exchange</h1>
                      <p className='text-1xl'>Celebrating Anjuman I Islam's Landmark Achievement on the BSE Social Stock Exchange It is with immense pride and profound gratitude that we share a ...<span className='text-blue-400 cursor-pointer'>read more</span>  </p>

                  </div>
                  
                  <div> <button className='border-2 px-10 py-2 text-blue-400 rounded-lg mb-5 mr-[-50%] translate-x-[200%] hover:text-black hover:border-blue-400'>View All</button></div>
              </div>
          </div>
      </section>

      <section className='grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 my-5 mx-16 gap-4 pb-10 border-b-2'>

        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
          <FaUniversity className='text-9xl'/>
          <h1 className='text-3xl'>My College</h1>
          <p className='text-center'>Get exclusive discounts and offers, request your ID , login to My Alumni and become member of Intellectual community and more</p>
        </div>
        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
          <MdCardGiftcard className='text-9xl'/>
          <h1 className='text-3xl'>Alumni Benefits</h1>
          <p className='text-center'>Our exclusive benefits for matriculated alumni of the University</p>
        </div>
        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <FaUsers className='text-9xl'/>
        <h1 className='text-3xl'>Join Group</h1>
        <p className='text-center'>With more than 150 regional alumni groups in over 90 countries, you're sure to find alumni near you</p>
        </div>
        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <FaCalendarAlt className='text-9xl'/>
        <h1 className='text-3xl'>Find Events</h1>
        <p className='text-center'>From Meeting Minds through to our Armchair Travel series, join us and discover our many events</p>
        </div>
        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <FaTag className='text-9xl'/>
        <h1 className='text-3xl'>Offers</h1>
        <p className='text-center'>We have a great range of resources and exclusive discounts available for our alumni and associates</p>
        </div>

      </section>

      <section className='my-5 mx-16 text-2xl font-semibold'>Distinguished Alumni</section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 my-5 mx-16 gap-4'>
        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <img src='https://www.mhssce.ac.in/images/department/IT/Distinguished%20Alumni/1.jpg' alt=''className='rounded-full h-[150px]'/>
        <h1 className='text-2xl text-center'>Chappalwala Aqsa Mohd Asif</h1>
          <ul className='mx-2 list-disc'>
          <li>Database Administrator At Saudi Telecom Company</li>
          <li>B.E In Information Technology-2014</li>
          </ul>
        </div>

        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <img src='https://www.mhssce.ac.in/images/Alumni/team/1.jpg' alt=''className='rounded-full h-[150px]' />
        <h1 className='text-2xl text-center'>Mr. Norman Moses Joseph</h1>
          <ul className='mx-2 list-disc'>
          <li>B.E Computer Engg.,2005</li>
          <li>Master of Science(Computer Graphics Technology), Purdue University,2011</li>
          <li>Technical Director at Walt Disney Animation Studios (USA)</li>
          </ul>
        </div>

        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <img src='https://www.mhssce.ac.in/images/Alumni/team/e1.jpg' alt=''className='rounded-full h-[150px]' />
        <h1 className='text-2xl text-center'>Mr. Irfan Kazi</h1>
          <ul className='mx-2 list-disc'>
            <li>Chief Investment Officer - Affordable Housing Fund </li>
            <li>SBICAP Ventures Limited </li>
            <li>MBA from Jamnalal bajaj institute of management studies</li>
            <li>B.E Electronics Engineering, 1990 batch</li>
          </ul>
        </div>

        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <img src='https://www.mhssce.ac.in/images/Alumni/team/mh1.jpg' alt=''className='rounded-full h-[150px]' />
        <h1 className='text-2xl text-center'>Ali Kohari</h1>
          <ul className='mx-2 list-disc'>
          <li>Deputy Manager</li>
          <li>Mahindra & Mahindra Ltd. Truck and Bus Div</li>
          
          </ul>
        </div>

        <div className='border-2 rounded-2xl hover:-translate-y-4 bg-blue-950 text-white shadow-1xl flex  items-center flex-col p-5 gap-3 cursor-pointer'>
        <img src='https://www.mhssce.ac.in/images/Alumni/team/c5.jpg' alt=''className='rounded-full h-[150px]' />
        <h1 className='text-2xl text-center'>Mr. Rashid R. Merchant</h1>
          <ul className='mx-2 list-disc'>
          <li>Vice President - Quality Control, Production & Special Products</li>
          <li>MICT (UK), M.E. (Civil), B.E.</li>
          </ul>
        </div>

      </section>

    </section>
  )
}

export default Home
