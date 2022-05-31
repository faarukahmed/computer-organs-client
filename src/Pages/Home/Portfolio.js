import React from "react";
const tick = <svg class="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor"
d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
</path>
</svg>
const Portfolio = () => {
  return (
    <div class="container my-24 px-6 mx-auto">
    <section class="mb-32 text-gray-800 md:text-left">
        <div class="block rounded-lg shadow-lg bg-white">
        <div class="flex flex-wrap">
            <div class="grow-0 lg:h-96 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
            <img src="https://thumbs.dreamstime.com/b/man-formal-suit-man-formal-suit-white-background-107682590.jpg" alt="Trendy Pants and Shoes"
                class="w-full mt-0 rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
                <h2 class="text-3xl font-bold mb-6 pb-2">Hi I'm Hasan Mahmud</h2>
                <p class="text-gray-500 mb-6 pb-2">
                A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
                </p>

                <h2 class="text-2xl font-bold mb-6 pb-2">Expertise</h2>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}JavaScript
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}React Js
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Tailwind
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}HTML5
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}CSS3
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}React BootStrap
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}WT-Auth
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Firebase
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Context API
                        </p>
                    </div>
                </div>
                <h2 class="text-2xl font-bold mb-6 pb-2">Comfortable</h2>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Node js

                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Express js
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}MongoDB
                        </p>
                    </div>
                </div>
                <h2 class="text-2xl font-bold mb-6 pb-2">Tools & Technologies</h2>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Github
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}VS Code
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Heroku
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Netlify
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Figma
                        </p>
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center">
                        {tick}Photoshop
                        </p>
                    </div>
                </div>
                <button type="button"
                class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                Hire Me
                </button>
            </div>
            </div>
        </div>
        </div>
    </section>
</div>
  );
};

export default Portfolio;
