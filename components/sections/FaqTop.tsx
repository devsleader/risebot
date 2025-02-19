'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface FaqTopProps {
    onSearch?: (searchTerm: string) => void;
}

const FaqTop: React.FC<FaqTopProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch?.(searchTerm);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        // Optional: Implement real-time search
        onSearch?.(e.target.value);
    };

    return (
        <div className="inner-page">
            <section className="tf-section tf-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div 
                                className="tf-title center mb40" 
                                data-aos="fade-up" 
                                data-aos-duration="800"
                            >
                                <h2 className="title">
                                    hi we're here to help you
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <form 
                                onSubmit={handleSubmit} 
                                className="form-seach mb20"
                            >
                                <input
                                    type="text"
                                    placeholder="All access"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                    aria-label="Search FAQs"
                                />
                                <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 20 20" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M19.0008 18.9998L13.8038 13.8028M13.8038 13.8028C15.2104 12.3962 16.0006 10.4885 16.0006 8.49931C16.0006 6.51011 15.2104 4.60238 13.8038 3.19581C12.3972 1.78923 10.4895 0.999023 8.50028 0.999023C6.51108 0.999023 4.60336 1.78923 3.19678 3.19581C1.79021 4.60238 1 6.51011 1 8.49931C1 10.4885 1.79021 12.3962 3.19678 13.8028C4.60336 15.2094 6.51108 15.9996 8.50028 15.9996C10.4895 15.9996 12.3972 15.2094 13.8038 13.8028V13.8028Z" 
                                        stroke="white" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>                            
                            </form>
                            <p className="text-center">
                                Find answers to frequently asked questions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaqTop;