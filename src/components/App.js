import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "../style/css/style.css";
import Header from "./Header";
import ArticleSlider from "./ArticleSlider";
import PostList from "./PostList";
// import PostView from "./PostView";
import SideBar from "./SideBar";
import Footer from "./Footer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }
    componentDidMount() {
        let postCategories = "http://localhost/wp-json/wp/v2/categories";
        fetch(postCategories)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    categories: response
                });
            });
    }
    render() {
        let categories = this.state.categories.map(category => {
            let categoryObj = {};
            categoryObj = {
                id: category.id,
                name: category.name
            };
            return categoryObj;
        });
        return (
            <div>
                <Header categories={categories} />
                <ArticleSlider />
                <section
                    id="main-body-section"
                    className="main-body-section d-flex justify-content-between p-5 mt-5 mb-5"
                >
                    <div>
                        <PostList categories={categories} />
                    </div>
                    <SideBar categories={categories} />
                </section>
                <Footer />
            </div>
        );
    }
}
export default App;
