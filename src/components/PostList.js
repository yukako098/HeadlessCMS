import React from "react";
import { Date } from "prismic-reactjs";
// import { Link } from "react-router-dom";

class PostList extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        let postsURL = "http://localhost/wp-json/wp/v2/posts?_embed";
        fetch(postsURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    posts: response
                });
            });
    }
    render() {
        let posts = this.state.posts.map((post, index) => {
            const date = Date(post.date);
            var moment = require("moment");
            const formattedDate = moment(date).format("LL");
            if (index === 0) {
                return (
                    <div
                        key={index}
                        className="card d-inline-block border-0 pl-3 pr-3 mb-3"
                    >
                        <div className="card-body">
                            <h4 className="text-center alice card-title">
                                {post.title.rendered}
                            </h4>
                            <h6 className="card-subtitle mb-2 alice text-center orange">
                                {formattedDate}
                            </h6>
                        </div>
                        <img
                            className="card-img-top"
                            src={
                                post._embedded["wp:featuredmedia"][0]
                                    .media_details.sizes["large"].source_url
                            }
                            alt="Card scap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a
                                href="#!"
                                className="orange text-uppercase font-weight-bold"
                            >
                                read more
                            </a>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div
                        key={index}
                        className="card d-inline-block border-0 w-50 pl-3 pr-3"
                    >
                        <img
                            className="card-img-top"
                            src={
                                post._embedded["wp:featuredmedia"][0]
                                    .media_details.sizes["large"].source_url
                            }
                            alt="Card scap"
                        />
                        <div className="card-body">
                            <h4 className="text-center alice card-title">
                                {post.title.rendered}
                            </h4>
                            <h6 className="card-subtitle mb-2 alice text-center orange">
                                {formattedDate}
                            </h6>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a
                                href="#!"
                                className="orange text-uppercase font-weight-bold"
                            >
                                read more
                            </a>
                        </div>
                    </div>
                );
            }
        });
        return <div>{posts}</div>;
    }
}
export default PostList;
