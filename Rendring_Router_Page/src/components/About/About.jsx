import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="g:\chand zaib\documents\DP.jpg"
                            alt="Chand Zaib"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I'm Chand Zaib. Graduated from National University of Moern Languages Islamabad.
                            I'm a Mern Developer and i have a great interest in web development. I've done some work in Data Science also.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I've done some projects in Flutter, React.js, HTML & CSS, Python, Machine Learning, Data Science, and many more.
                            I'm a quick learner and i'm always open to learning new technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}