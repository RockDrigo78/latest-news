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
            const apiKey = "7fb5557b0e1147debd530d7de88d1a33";
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
