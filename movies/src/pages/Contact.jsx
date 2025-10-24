import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We will get back to you soon.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16 px-4">
            <div className="max-w-3xl w-full bg-gray-800 rounded-xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
                <p className="text-center mb-8 text-gray-300">
                    Have questions or suggestions? We'd love to hear from you!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-300">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-300 font-bold py-3 rounded-md"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-10 text-center text-gray-400">
                    <p>Email: support@moviezone.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Movie Lane, Film City, USA</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
