import React from 'react';

const Deckofcards = () => {
  return (
    <div>
      {/* <!-- Card --> */}
      <div class="flex max-w-xl flex-col gap-6 rounded-box bg-base-200 p-6">
        {/* <!-- Header -->  */}
        <div class="flex items-center justify-between">
          <span class="text-sm">Courses and MOOCs</span>

          <span class="badge badge-primary badge-lg">Psychology</span>
        </div>

        {/* <!-- Body -->  */}
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold">Psychology - Course 5: Health and Behavior</h1>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique
            exercitationem optio libero vitae accusamus cupiditate laborum eos
          </span>

          <span class="text-sm">
            Visit on
            <a class="link link-accent">edx.org</a>
            or
            <a class="link link-accent">classcentral.com</a>
          </span>
        </div>

        {/* <!-- Footer -->  */}
        <div class="flex gap-2">
          <a class="btn btn-circle btn-ghost btn-sm text-lg">
            <i class="fa-brands fa-twitter"></i>
          </a>

          <a class="btn btn-circle btn-ghost btn-sm text-lg">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a class="btn btn-circle btn-ghost btn-sm text-lg">
            <i class="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Deckofcards;
