import React from "react";

const LatestBlog = () => {
    return (
        <div className="card mb-5 border-0">
            <img
                className="card-img-top"
                src="./../imgs/yukalog-pic2.jpg"
                alt="Card cap"
            />
            <div className="card-body">
                <h4 className="text-center alice display-4 card-title">
                    Card title
                </h4>
                <h6 className="card-subtitle mb-2 alice text-center orange">
                    May 20, 2019
                </h6>
                <p className="latest-blog-description card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and
                </p>
                <a href="#!" className="orange text-uppercase font-weight-bold">
                    read more
                </a>
            </div>
        </div>
    );
};

export default LatestBlog;
