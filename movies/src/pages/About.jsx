import React from "react";

function About() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center mb-8">About MovieZone</h1>

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-lg">
                        MovieZone is your ultimate destination for discovering movies, exploring reviews,
                        ratings, and keeping track of your favorites. Our goal is to provide movie enthusiasts
                        with an intuitive and seamless experience.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-bold">Neel Dalwadi</h3>
                            <p className="text-gray-600">Frontend Developer</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-bold">John Doe</h3>
                            <p className="text-gray-600">Backend Developer</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-bold">Jane Smith</h3>
                            <p className="text-gray-600">UI/UX Designer</p>
                        </div>
                    </div>
                </div>

                <p className="mt-16 text-center text-gray-500">
                    &copy; 2025 MovieZone. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default About;
