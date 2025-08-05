import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {
    const testimonials = [
  {
    name: "Shally Verma",
    location: "Delhi, India",
    image: assets.testimonial_image_1,
    testimonial: "CarRental made my trip to Himachal so smooth. The car was clean and well-maintained."
  },
  {
    name: "Priya Iyer",
    location: "Chennai, India",
    image: assets.testimonial_image_2,
    testimonial: "I booked a car for a family wedding. The service was timely and professional. Highly recommend!"
  },
  {
    name: "Zoya Khan",
    location: "Mumbai, India",
    image: assets.testimonial_image_1,
    testimonial: "Affordable rates and excellent customer support. This is now my go-to car rental."
  }
];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title title="What Our Customers Say" subTitle="Discover why discerning travelers choose us" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial