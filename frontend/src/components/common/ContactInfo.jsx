// src/components/.../ContactInfo.jsx
import { useState } from 'react';
import Contact from '../../assets/contact.png';
import Arrow from '../../assets/warrow.png';
import api from '../../api'; // <- path assumes api.js is at src/api.js

function ContactInfo () {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        // clear field error on change
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            // adjust payload keys to match your Laravel controller expected names
            const payload = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                subject: form.subject,
                message: form.message
            };

            const res = await api.post('/contact', payload);
            // assuming Laravel returns 200/201 with success message
            alert(res.data.message || 'Message sent successfully!');
            // reset form
            setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (err) {
            // Validation errors (Laravel typical 422 response)
            if (err.response?.status === 422 && err.response?.data?.errors) {
                setErrors(err.response.data.errors);
                // optionally show first error message in an alert
                const firstField = Object.keys(err.response.data.errors)[0];
                const firstMsg = err.response.data.errors[firstField][0];
                alert(firstMsg);
            } else {
                // generic error
                console.error('Contact API error:', err);
                alert('Something went wrong while sending your message. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Contact Form Section */}
            <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
                        
                        {/* Left - Image */}
                        <div className="order-2 lg:order-1">
                            <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                                <img 
                                    src={Contact} 
                                    alt="Contact Us" 
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right - Form */}
                        <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
                                    Let's Work Together
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg text-[#797979]">
                                    Reach Us Directly. We'd love to hear from you.
                                </p>
                            </div>
                            
                            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
                                {/* Full Name */}
                                <div className="relative">
                                    <fieldset className={`border ${errors.name ? 'border-red-500' : 'border-[#BFD6E8]'} rounded-lg`}>
                                        <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Full name</legend>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? 'error-name' : undefined}
                                        />
                                    </fieldset>
                                    {errors.name && <p id="error-name" className="mt-1 text-sm text-red-600">{errors.name[0]}</p>}
                                </div>
                                
                                {/* Email Address */}
                                <div className="relative">
                                    <fieldset className={`border ${errors.email ? 'border-red-500' : 'border-[#BFD6E8]'} rounded-lg`}>
                                        <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Email address</legend>
                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            type="email"
                                            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? 'error-email' : undefined}
                                        />
                                    </fieldset>
                                    {errors.email && <p id="error-email" className="mt-1 text-sm text-red-600">{errors.email[0]}</p>}
                                </div>
                                
                                {/* Phone Number & Subject */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="relative">
                                        <fieldset className={`border ${errors.phone ? 'border-red-500' : 'border-[#BFD6E8]'} rounded-lg`}>
                                            <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Phone number</legend>
                                            <input
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                                aria-invalid={!!errors.phone}
                                                aria-describedby={errors.phone ? 'error-phone' : undefined}
                                            />
                                        </fieldset>
                                        {errors.phone && <p id="error-phone" className="mt-1 text-sm text-red-600">{errors.phone[0]}</p>}
                                    </div>
                                    <div className="relative">
                                        <fieldset className={`border ${errors.subject ? 'border-red-500' : 'border-[#BFD6E8]'} rounded-lg`}>
                                            <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Subject</legend>
                                            <input
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                type="text"
                                                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none"
                                                aria-invalid={!!errors.subject}
                                                aria-describedby={errors.subject ? 'error-subject' : undefined}
                                            />
                                        </fieldset>
                                        {errors.subject && <p id="error-subject" className="mt-1 text-sm text-red-600">{errors.subject[0]}</p>}
                                    </div>
                                </div>
                                
                                {/* Message */}
                                <div className="relative">
                                    <fieldset className={`border ${errors.message ? 'border-red-500' : 'border-[#BFD6E8]'} rounded-lg`}>
                                        <legend className="ml-3 px-2 text-xs sm:text-sm text-gray-500">Message</legend>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base text-black bg-white focus:outline-none resize-none"
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? 'error-message' : undefined}
                                        ></textarea>
                                    </fieldset>
                                    {errors.message && <p id="error-message" className="mt-1 text-sm text-red-600">{errors.message[0]}</p>}
                                </div>
                                
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`inline-flex items-center space-x-2 sm:space-x-3 ${loading ? 'opacity-60 cursor-not-allowed' : 'transform hover:scale-105'} bg-[#4587C7] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-[#3a75b5] transition-all duration-300`}
                                >
                                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                    <img 
                                        src={Arrow} 
                                        alt="Arrow" 
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactInfo;
