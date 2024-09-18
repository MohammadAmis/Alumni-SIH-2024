import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import founderimage from '../Assets/founder-image.jpg'
import collegeimage from '../Assets/saboo image 3.jpg'
import drkazi from '../Assets/DrKazi.jpg'
// import vicepresident from '../Assets/vicepresident.jfif'

const AboutUs = () => {
    const collegeInfo = {
        name: 'Evergreen College',
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        founder: `The Mohammed Haji Saboo Siddik Institute (A Muslim Minority Institution) owes its existence to the munificence 
                of late Mohammed, son of Haji Saboo Siddik, who bequeathed a large sum of money for establishing, conducting and managing 
                this Institution for imparting Vocational, Technical and Industrial training and education. The value of the assets, 
                so bequeathed, exceeded Rupees Three Crore at the time of donation.The Institution is managed and administrated by the
                Anjuman-i-Islam as the sole trustee, appointed by the Bombay High Court's decree and scheme framed and sanctioned thereunder.
                The very well laid out college building accommodates workshops, laboratories, classrooms, lecture halls, drawing halls, students' common room, seminar hall, library, reading-rooms, offices, etc. with modern facilities. The College is accommodated in an exclusively newly-constructed spacious ground plus five floors building. The library of the College is housed in a separate newly-constructed building and is furnished with reference section and reading-rooms for students and staff. A very sophisticated Seminar Hall furnished with the most modern equipment was inaugurated by Dr. Raja Ramanna, an eminent scientist of our country, on the annual day celebrations on 9th April, 2001. A spacious and well-furnished cafeteria is also operative in the campus.`,
        mission: 'To be enabler of creation and dissemination of futuristic knowledge in technology through research and quality education.',
        vision: 'To be an institute of global repute committed to the cause of nation building through technology based education.',
        history: 'The college was established with a definte mission to disseminate a value-oriented quality technical education among our youth to fulfil the increasing demand of human resources for the ever-growing engineering industry of our nation, which it has truly proved to the core.',
        leadershipTeam: [
            { name: 'Dr. Zahir Ishaque Kazi ', role: 'President', image: `${drkazi}` },
            { name: 'Prof. Michael Chen', role: 'Vice President', image: `${drkazi}` },
            { name: 'Dr. Emily Rodriguez', role: 'Head of Research', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' },
        ],
        contact: {
            phone: '+1 (555) 123-4567',
            email: 'info@evergreencollege.edu',
            address: '123 College Avenue, Evergreen City, EC 12345',
        },
        testimonials: [
            { name: 'Sarah Johnson', quote: "Let it be extra curricular, scholarships, collaboration, career guidance or fun all the faculties of Anjuman I Islam’s  MHSS college of Engineering  as a trust was with me all the time. I will cherish those four years throughout my life. I am now employed as a full time faculty in Anjuman I Islam's Kalsekar technical campus", image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
            { name: 'Michael Chen', quote: "I had an excellent time & memories for a life time at M.H Saboo Siddik College of Engineering. They have a very dynamic Faculty which has groomed us very well for our future, In terms of personal and professional growth. They conduct lot of seminars, events & activities which gives us the real picture of how the industry looks like.", image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }
          ],
    };

    return (
        <div className="bg-gray-100 min-h-screen">

            <main className="container mx-auto  p-4">
                <section className="grid grid-cols-2 ml-20 mr-20 bg-white rounded-lg shadow-lg p-8 mb-8" aria-labelledby="mission-heading">
                    <div className=' flex justify-center mx-auto item-center '>
                        <img src={founderimage} className=' w-full h-full content-cover p-[45px]' />
                    </div>
                    <div className='w-full'>
                        <h2 id="mission-heading" className="text-3xl font-bold text-green-700 mb-4">Founder</h2>
                        <p className="text-lg mb-4">{collegeInfo.founder}</p>
                    </div>

                </section>

                <section className="ml-20 mr-20 bg-white rounded-lg shadow-lg p-8 mb-8" aria-labelledby="history-heading">
                    <h2 id="history-heading" className="text-3xl font-bold text-green-700 mb-4">Our History</h2>
                    <p className="text-lg mb-4">{collegeInfo.history}</p>
                </section>

                <section className="ml-20 mr-20 bg-white rounded-lg shadow-lg p-8 mb-8" aria-labelledby="leadership-heading">
                    <h2 id="leadership-heading" className="text-3xl font-bold text-green-700 mb-4">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {collegeInfo.leadershipTeam.map((leader, index) => (
                            <div key={index} className="text-center">
                                <img src={leader.image} alt={leader.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                                <h3 className="text-xl font-semibold">{leader.name}</h3>
                                <p className="text-green-700">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='ml-20 mr-20 grid grid-cols-2 gap-20'>
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8" aria-labelledby="mission-heading">
                        <h2 id="mission-heading" className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
                        <p className="text-lg mb-4">{collegeInfo.vision}</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8" aria-labelledby="mission-heading">
                        <h2 id="mission-heading" className="text-3xl font-bold text-green-700 mb-4">Our Vission</h2>
                        <p className="text-lg mb-4">{collegeInfo.mission}</p>
                    </div>
                </section>

                <section className="ml-20 mr-20 bg-white rounded-lg shadow-lg p-8 mb-8" aria-labelledby="mission-heading">
                    <h2 id="mission-heading" className="text-3xl font-bold text-green-700 mb-4">Program Outcomes</h2>
                    <div>
                        <h3 className='text-2xl font-bold'>Engineering knowledge</h3>
                        <p className="text-lg mb-4">Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>Problem analysis</h3>
                        <p className="text-lg mb-4 pr-20"> Identify, formulate, review research literature, and analyze complex engineering problems reaching      substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>Design/development of solutions</h3>
                        <p className="text-lg mb-4">Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>Conduct investigations of complex problems</h3>
                        <p className="text-lg mb-4">Research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>The engineer and society</h3>
                        <p className="text-lg mb-4"> Reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>Individual and team work</h3>
                        <p className="text-lg mb-4">Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>
                    </div>
                </section>


                {/* Student Testimonials Section */}
                <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Student Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {collegeInfo.testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mr-6 object-cover" />
                                    <div>
                                        <p className="text-gray-600 mb-2">"{testimonial.quote}"</p>
                                        <p className="font-semibold">{testimonial.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>





                {/* <section className="ml-20 mr-20 bg-white rounded-lg shadow-lg p-8" aria-labelledby="contact-heading">
                    <h2 id="contact-heading" className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="flex items-center mb-2"><FaPhone className="mr-2 text-green-700" /> {collegeInfo.contact.phone}</p>
                            <p className="flex items-center mb-2"><FaEnvelope className="mr-2 text-green-700" /> {collegeInfo.contact.email}</p>
                            <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-green-700" /> {collegeInfo.contact.address}</p>
                        </div>
                        <div>
                            <iframe
                                title="College Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2171918127517!2d-73.98881368459449!3d40.74844097932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1652338284608!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section> */}
            </main>

            <footer className="bg-green-800 text-white mt-8 py-4">
                <div className="container mx-auto text-center">
                    <p>Copyright ©2020 M.H. Saboo Siddik College Of Engineering. All Rights Reserved | Website design by Hitech Advertising</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;