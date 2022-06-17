import React from "react"
import Image from "next/image"

const Main = () => {
    return (
        <div className="container px-4 mx-auto">
            <div
                className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hi there 👋,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">I am seeking opportunities, you can reach me via <a
                            href="mailto:szikszo.zoltan@gmail.com"
                            className="font-bold transition-colors hover:text-sky-500" target="_blank"
                            rel="noopener">Email</a>.
                        </p>
                        <p className="mb-4">Currently, I am a final-year Software Developer student at <a
                            href="https://www.haaga-helia.fi"
                            className="font-bold transition-colors hover:text-sky-500" target="_blank"
                            rel="noopener">@haagahelia </a>
                            <br /> I gained knowledge about JavaScript, React, Java, SpringBoot and React Native during my studies.
                        </p>
                        <p className="mb-4">
                            This is my digital space where I am able to share what I am studying or shipping nowadays. <br />
                            I love to travel around the world, study new technologies and spend quality time with my family.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src="https://pbs.twimg.com/profile_images/1531758514905006080/qBS7o0jf_400x400.jpg"
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}

                    />
                    <div className="flex justify-center mt-6">
                        <div
                            className="flex md:flex lg:flex sm:flex space-x-4 font-medium text-gray-800 sm:block dark:text-white">
                            <a className="transition-colors hover:text-sky-500" target="_blank" rel="noreferrer"
                               href="https://twitter.com/zoltanszikszo">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-2x1"
                                width="2em" height="2em" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path></svg>
                            </a>
                            <a className="transition-colors hover:text-sky-500" target="_blank" rel="noreferrer"
                               href="https://www.linkedin.com/in/zoltanszikszo/">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-2x1"
                                width="2rem" height="2rem" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path></svg>
                            </a>
                            <a className="transition-colors hover:text-sky-500" target="_blank" rel="noreferrer"
                               href="https://github.com/zoltanszikszo">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-2x1"
                                width="2rem" height="2rem" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                            </a><a className="transition-colors hover:text-sky-500" target="_blank" rel="noreferrer"
                                   href="https://instagram.com/xixo.codes">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-2x1" 
                                width="2em" height="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;