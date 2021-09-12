import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Formular from "./components/Formular";
import NewsList from "./components/NewsList";

function App() {
    const [category, addCategory] = useState("");
    const [country, addCountry] = useState("us");
    const [news, addNews] = useState([]);

    useEffect(() => {
        const apiRequest = async () => {
            const apiKey = process.env.REACT_APP_NEWS_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
            const response = await axios.get(url);
            addNews(response.data.articles);
        };
        apiRequest();
    }, [category, country]);

    return (
        <Fragment>
            <Header title="Find the Latest Top News" />

            <div className="container white">
                <Formular addCategory={addCategory} addCountry={addCountry} />
            </div>

            <NewsList news={news} />
        </Fragment>
    );
}

export default App;
