import React from "react";

class ArticleSlider extends React.Component {
    constructor() {
        super();

        this.state = {
            postImages: []
        };
    }
    componentDidMount() {
        let postsURL = "http://localhost/wp-json/wp/v2/posts?_embed";

        fetch(postsURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    postImages: response
                });
            });
    }
    render() {
        let postImage = this.state.postImages.map((postImage, index) => {
            return (
                <li
                    key={index}
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    // className="active"
                />
            );
        });

        return (
            <section className="top-image-section relative">
                {/* <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                        />
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                        />

                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src="#"
                                data-src="holder.js/900x400?theme=social"
                                alt="First slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="#"
                                data-src="holder.js/900x400?theme=industrial"
                                alt="Second slide"
                            />
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}
            </section>
        );
    }
}

export default ArticleSlider;
