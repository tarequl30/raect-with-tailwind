import React from 'react';
import img from '../../../images/undraw_personal_training_0dqn.svg'
import plan1 from '../../../images/plan1.svg'
import plan2 from '../../../images/plan2.svg'
import plan3 from '../../../images/plan3.svg'
import plan4 from '../../../images/plan4.svg'
const Header = () => {
    return (
        <div class="p-5 mx-auto max-w-screen-xl">
            <h2 class="font-bold uppercase text-xl pb-4">GYM PLAN</h2>

            <div class="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">

                <div>
                    <img class="border  mb-1 border-solid w-full hover:border-blue-500" alt="Best seller"
                        src={plan1} width="100%" loading="lazy" />
                    <h2 class="pt-2 m-0 leading-4 font-semibold">Indoor excercise 2021 USA</h2>
                    <p>$210</p>
                    <p class="text-green-500 italic font-medium">In Stock</p>
                </div>
                <div class="">
                    <img class="border border-solid w-full hover:border-blue-500" alt="Best seller"
                        src={plan2} width="100%" loading="lazy" />
                    <h2 class="pt-2 m-0 leading-4 font-semibold">Indoor excercise 2021 USA</h2>
                    <p>$210</p>
                    <p class="text-green-500 italic font-medium">In Stock</p>
                </div>
                <div class="">
                    <img class="border border-solid w-full hover:border-blue-500" alt="Best seller"
                        src={plan3} width="100%" loading="lazy" />
                    <h2 class="pt-2 m-0 leading-4 font-semibold">Indoor excercise 2021 USA</h2>
                    <p>$210</p>
                    <p class="text-green-500 italic font-medium">In Stock</p>
                </div>
                <div class="">
                    <img class="border  border-solid w-full hover:border-blue-500" alt="Best seller"
                        src={plan4} width="100%" loading="lazy" />
                    <h2 class="pt-2 m-0 leading-4 font-semibold">Outdoor excercise 2021 USA</h2>
                    <p>$210</p>
                    <p class="text-red-500 italic font-medium">Out of Stock</p>
                </div>


            </div>
        </div>
    );
};

export default Header;