import React from 'react';
import inte1 from '../../images/inte1.jpg'
import inte2 from '../../images/inte2.webp'
import instructor from '../../images/ins.jpg'
const Service = () => {
    return (
        <section class="bg-white">
            <div class="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
                <div class="md:w-2/3">
                    <div class="hidden md:flex md:items-center md:space-x-10">
                        <img class="object-cover object-center rounded-md shadow w-72 h-72"
                            src={inte1} alt="blank" />
                        <img class="object-cover object-center rounded-md shadow w-72 h-72" src={inte2} alt="blank" />
                    </div>
                    <h2 class="text-3xl font-semibold text-gray-800 md:mt-6">Cool Enviroment and Classy Instructor </h2>
                    <p class="max-w-lg mt-4 text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse illum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia
                        deserunt mollit anim id est laborum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                </p>
                </div>
                <div class="md:w-1/3">
                    <img class="object-cover object-center w-full rounded-md shadow" width="100%"
                        src={instructor} alt="blank" />
                </div>
            </div>
        </section>
    );
};

export default Service;