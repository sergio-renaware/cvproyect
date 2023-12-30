import './styles/MainContent.css';

const MainContent = () => {
    return (
        <div className="card-wrap">
            <div className="content">
                <h3 className="title bold">
                    <span>About Me</span>
                </h3>
                <div className='description'>
                    <h3 className='bold'>
                        Hello! I'm Sergio Beleño.
                    </h3>
                    <h4>
                        Technical leader and Full Stack web developer, specialized in VTEX, SEO and creating impactful e-commerce experiences. An experienced professional with proficiency in HTML, CSS, JavaScript, React JS, Node JS, and more. I guarantee cutting-edge solutions for transformative online experiences.
                    </h4>
                </div>
            </div>
            <div className="content">
                <h3 className="title bold">
                    <span>My Services</span>
                </h3>

                <div className="row service-items border-line-v">
                    {" "}
                    {/* service item */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                        <div className="service-item">
                            <div className="icon">
                                {" "}
                                <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fab-html5"
                                    viewBox="0 0 384 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                                </svg>
                            </div>
                            <div className="name">
                                {" "}
                                <span> Front-end </span>
                            </div>
                            <div className="desc">
                                <div>
                                    <p>
                                        Modern and mobile-ready website that will help you reach all
                                        of your marketing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* service item */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                        <div className="service-item">
                            <div className="icon">
                                {" "}
                                <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fab-php"
                                    viewBox="0 0 640 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
                                </svg>
                            </div>
                            <div className="name">
                                {" "}
                                <span> Back-End </span>
                            </div>
                            <div className="desc">
                                <div>
                                    <p>
                                        UI/UX focus on the user, frontend focus on the settings of the
                                        user, and backend focus on the data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* service item */}
                    <div className="col col-d-6 col-t-6 col-m-12">
                        <div className="service-item">
                            <div className="icon">
                                {" "}
                                <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fab-wordpress"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z" />
                                </svg>
                            </div>
                            <div className="name">
                                {" "}
                                <span> WordPress Development </span>
                            </div>
                            <div className="desc">
                                <div>
                                    <p>WordPress development services improve business websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* service item */}
                    <div className="col col-d-6 col-t-6 col-m-12">
                        <div className="service-item">
                            <div className="icon">
                                {" "}
                                <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fas-shield-alt"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" />
                                </svg>
                            </div>
                            <div className="name">
                                {" "}
                                <span> WordPress Security </span>
                            </div>
                            <div className="desc">
                                <div>
                                    <p>
                                        Security consultants can check the code and scan for
                                        vulnerabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;