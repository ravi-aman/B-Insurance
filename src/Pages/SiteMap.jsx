import React from 'react';
import Component9 from '../Components/LifeInsurance/component9';
import Coverage from '../Components/LifeInsurance/Coverage';

function Sitemap() {
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold text-gray-800 mb-20 mt-16">Sitemap</h1>
            <div className='bg-white py-12 pb-20'>
                <div className="max-w-5xl m-auto">
                    <p className="text-start md:text-3xl p-5">Navigate your way around the website</p>

                    <div className="max-w-6xl text-lg mx-auto border-t border-gray-200 pt-10 grid grid-row-4 p-5 md:grid-cols-4 gap-8 text-left">
                        <div>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="underline underline-offset-2">Home</a></li>
                                <li><a href="#" className="underline underline-offset-2">About Us</a></li>
                                <li><a href="#" className="underline underline-offset-2">Contact Us</a></li>
                                <li><a href="#" className="underline underline-offset-2">How It Works</a></li>
                                <li><a href="#" className="underline underline-offset-2">FAQs</a></li>
                                <li><a href="#" className="underline underline-offset-2">Blog</a></li>
                                <li><a href="#" className="underline underline-offset-2">Terms Of Use</a></li>
                                <li><a href="#" className="underline underline-offset-2">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Insurance</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="underline underline-offset-2">Life Insurance</a></li>
                                <li><a href="#" className="underline underline-offset-2">Commercial Insurance</a></li>
                                <li><a href="#" className="underline underline-offset-2">Auto Insurance</a></li>
                                <li><a href="#" className="underline underline-offset-2">Home Insurance</a></li>
                                <li><a href="#" className="underline underline-offset-2">Travel Insurance</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Commercial</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="">...</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Support</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="#" className="underline underline-offset-2">Contact Us</a></li>
                                <li><a href="#" className="underline underline-offset-2">About Us</a></li>
                                <li><a href="#" className="underline underline-offset-2">How It Works</a></li>
                                <li><a href="#" className="underline underline-offset-2">FAQs</a></li>
                                <li><a href="#" className="underline underline-offset-2">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Coverage />
        </div>
    );
}

export default Sitemap;

