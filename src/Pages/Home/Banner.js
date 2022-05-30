import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
    style={{
        background: `url(https://media.istockphoto.com/photos/technology-maintenance-hardware-from-man-engineer-repair-computers-picture-id1320836864?b=1&k=20&m=1320836864&s=170667a&w=0&h=Yzp9fOLABuKOBZHNz8crb9qD_tVrpqvy7siuC4NVBU8=)`,
        backgroundRepeat: "no-repeat" ,
        backgroundSize: "cover",
    }}
      class="hero min-h-screen"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
