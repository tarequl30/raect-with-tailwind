import React from 'react';
import gym from '../../images/gym-shutterstock-640.webp'
import img from '../../images/undraw_personal_training_0dqn.svg'
const Cart = () => {
  return (
    <section class="bg-bg">
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div class="items-center md:flex md:space-x-6">
          <div class="md:w-1/2">
            <h3 class="text-7xl  font-bold text-gray-800"> Gym For Fit Yourself </h3>
            <p class="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
            <button href="#" class="block mt-8 text-indigo-700 underline">Buy a Plan</button>
          </div>

          <div class="mt-8 md:mt-0 md:w-1/2">
            <div class="flex items-center justify-center">
              <div class="max-w-md">
                <img class="object-cover object-center w-full rounded-md shadow" width="100%"
                  src={img} alt="blank" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Cart;