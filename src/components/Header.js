import React from "react";

const Header = () => {
    var isClicked = false;
    const showSlideNav = () => {
        isClicked = !isClicked;
        var slide_nav = document.getElementById("slide-nav");
        var black_bg_filter = document.getElementById("black-bg-filter");
        var main_body_section = document.getElementById("main-body-section");
        var footer = document.getElementById("footer");
        // var contact_section = document.getElementById("contact-section");
        if (isClicked) {
            slide_nav.style.display = "block";
            slide_nav.style.width = "25%";
            black_bg_filter.style.display = "block";
            main_body_section.classList.remove("d-flex");
            main_body_section.style.display = "none";
            footer.style.display = "none";
            // contact_section.style.display = "none";
        } else {
            slide_nav.style.display = "none";
            slide_nav.style.width = "0%";
            black_bg_filter.style.display = "none";
            main_body_section.style.display = "block";
            main_body_section.classList.add("d-flex");
            footer.style.display = "block";
            // contact_section.style.display = "block";
        }
    };

    return (
        <div>
            <div id="slide-nav" className="section p-5 slide-nav">
                <p className="text-right pt-3">
                    <i onClick={showSlideNav} className="fas fa-times" />
                </p>
                <ul className="p-0">
                    <li className="text-uppercase p-3 mr-2">home</li>
                    <li className="text-uppercase d-flex p-3 mr-2">
                        <div className="dropdown open">
                            <button
                                className="btn dropdown-toggle p-0 text-uppercase"
                                type="button"
                                id="dropdownMenu5"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                categories
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                    Separated link
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                    Action
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                    Another action
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="text-uppercase p-3 mr-2">portfolio</li>
                    <li className="text-uppercase p-3 mr-2">contact</li>
                </ul>
                <div className="card p-3 mb-5">
                    <h4 className="card-title alice text-center text-uppercase">
                        about me
                    </h4>
                    <img
                        className="card-img-top"
                        src="./yukalog-pic2.jpg"
                        alt="Card cap"
                    />
                    <div className="card-body">
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="card p-3 mb-5">
                    <div className="card-body">
                        <h4 className="card-title alice text-center text-uppercase">
                            follow me
                        </h4>
                        <p className="card-text d-flex justify-content-between">
                            <i className="fab fa-github" />
                            <i className="fab fa-linkedin-in" />
                            <i className="fab fa-twitter" />
                            <i className="fab fa-pinterest" />
                        </p>
                    </div>
                </div>
            </div>
            <div id="black-bg-filter" className="black-bg-filter w-100 h-100" />
            <header>
                <section className="title-section d-flex justify-content-between p-3 pr-5 pl-5">
                    <div className="sns-container d-flex justify-content-between align-center">
                        <i className="fab fa-github mr-3" />
                        <i className="fab fa-linkedin-in mr-3" />
                        <i className="fab fa-twitter mr-3" />
                        <i className="fab fa-pinterest" />
                    </div>
                    <h1 className="top-title yellowtail display-1">yukaLog</h1>
                    <div className="align-center">
                        <i onClick={showSlideNav} className="fas fa-bars" />
                    </div>
                </section>
            </header>
            <nav className="menu-nav">
                <ul className="d-flex justify-content-center m-0">
                    <li className="text-uppercase p-3 mr-2">home</li>
                    <li className="text-uppercase d-flex p-3 mr-2">
                        <div className="dropdown open">
                            <button
                                className="btn dropdown-toggle p-0 text-uppercase"
                                type="button"
                                id="dropdownMenu5"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                categories
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#!">
                                    Separated link
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                    Action
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#!">
                                    Another action
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="text-uppercase p-3 mr-2">portfolio</li>
                    <li className="text-uppercase p-3 mr-2">contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
