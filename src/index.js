import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style/css/style.css";
import Header from "./components/Header";
import ArticleSlider from "./components/ArticleSlider";
import LatestBlog from "./components/LatestBlog";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <Header />
            <ArticleSlider />
            <section
                id="main-body-section"
                className="main-body-section d-flex p-5 mt-5 mb-5"
            >
                <div>
                    <LatestBlog />
                    <h6 className="card-subtitle mb-2 text-muted text-capitalize text-center">
                        other article{" "}
                    </h6>
                    <PostList />
                    {/* <Route exact path="/" component={PostList} /> */}
                    {/* <Route path="/:slug" component={PostView} /> */}
                </div>
                <SideBar />
            </section>
            <Footer />
        </Router>
    );
};

// export default App;
ReactDOM.render(<App />, document.querySelector("#root"));
