import React from "react";
import Twitter from "../api/Twitter";
import yukako from "../imgs/yukalog-pic2.jpg";

const SideBar = () => {
    return (
        <section className="sidebar-section w-50">
            <div className="card p-5 mb-5">
                <h4 className="card-title alice text-center text-uppercase">
                    about me
                </h4>
                <img className="card-img-top" src={yukako} alt="Card cap" />
                <div className="card-body">
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
            <div className="card p-5 mb-5">
                <h3 className="card-header text-center twitter-header alice">
                    twitter
                </h3>
                <div className="card-body">
                    {/* <a
                        className="twitter-timeline"
                        data-height="600"
                        href="https://twitter.com/098front?ref_src=twsrc%5Etfw"
                    >
                        Tweets by 098front
                    </a> */}
                    <Twitter />
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    />
                </div>
            </div>
            <div className="card p-5 mb-5">
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
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title alice text-center text-uppercase">
                        categories
                    </h4>
                    <ul className="card-text">
                        <li>aa</li>
                        <li>bb</li>
                        <li>cc</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SideBar;
