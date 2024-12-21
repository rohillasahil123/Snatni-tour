import React from 'react';
import profile from "../../../../assets/profile.png"



const AboutUs = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'CEO & Founder',
            image: profile,
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Jane Smith',
            role: 'Creative Director',
            image: profile, 
            bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'Mike Johnson',
            role: 'Lead Developer',
            image: profile,
            bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4  sm:px-6 lg:px-8">
                    <div className="text-center  ">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            About Us
                        </h1>
                        <p className="mt-6 w-[90%] mx-auto sm:text-md text-gray-500">
                            Vaishno Devi Temple, located in Jammu and Kashmir, is one of India's most revered Hindu shrines dedicated to Mata Vaishno Devi, attracting millions of devotees annually who trek uphill to seek her blessings. Gita Mandir in Vrindavan is a beautiful temple dedicated to the sacred text Bhagavad Gita, featuring intricate carvings depicting scenes from the holy book. The Kumbh Mela, the world's largest religious gathering, is celebrated across four cities (Haridwar, Prayagraj, Nashik, and Ujjain) on a rotating basis, where millions of pilgrims gather to take holy dips in sacred rivers. The Char Dham Yatra comprises four holy sites - Badrinath, Kedarnath, Gangotri, and Yamunotri - located in the Indian Himalayas of Uttarakhand. This pilgrimage circuit is considered highly auspicious in Hinduism, with devotees believing that visiting these sites helps achieve moksha (salvation). Each of these destinations holds profound spiritual significance and showcases India's rich religious heritage and cultural traditions.
                        </p>
                    </div>
                </div>
            </div>
            {/* Our Story Section */}
            <div className=" bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Story
                        </h2>
                        <p className="mt-6 w-[90%] mx-auto sm:text-md text-gray-500">
                            Deepa clutched her grandmother's hand as they began their sacred yatra through India's ancient temples. Their journey started at the golden dawn in Varanasi, where the holy Ganges flowed with timeless grace. The morning aarti bells echoed across the ghats as devotees offered their prayers.
                            From there, they traveled south to Rameshwaram, where Lord Rama had built the bridge to Lanka. The salt breeze carried whispers of ancient tales as they walked through the longest temple corridor in India, its pillars telling stories of devotion through centuries.
                            In Tirupati, they joined thousands climbing the seven hills to seek Lord Venkateshwara's blessings. The fragrance of camphor and jasmine filled the air as they waited for darshan, their hearts full of devotion.
                            Their final stop was Kedarnath, nestled in the Himalayas. Despite the challenging trek, Deepa felt a divine energy as they approached the ancient shrine. Snow-capped peaks stood witness as generations before them had made the same pilgrimage.
                            Throughout their journey, each temple, ritual, and sacred site deepened their connection to the eternal wisdom of Sanatan Dharma. As they returned home, Deepa realized she carried not just memories, but a profound spiritual awakening.
                        </p>
                    </div>
                </div>
            </div>
            {/* Values Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Values
                        </h2>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Value 1 */}
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                                    <p className="text-gray-500">
                                        We strive to bring new ideas and solutions to the table.
                                    </p>
                                </div>
                                {/* Value 2 */}
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                                    <p className="text-gray-500">
                                        We are committed to delivering the highest quality in everything we do.
                                    </p>
                                </div>
                                {/* Value 3 */}
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                                    <p className="text-gray-500">
                                        We maintain the highest standards of professionalism and ethics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
                            Meet Our Team
                        </h2>
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="space-y-4">
                                        <img
                                            className="mx-auto h-40 w-40 rounded-full object-cover"
                                            src={member.image}
                                            alt=""
                                        />
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                {member.name}
                                            </h3>
                                            <p className="text-indigo-600">{member.role}</p>
                                            <p className="text-gray-500">{member.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;