import React from "react";
import News from "./News";
import PropTypes from "prop-types";

const NewsList = ({ news }) => {
    return (
        <div className="row">
            {news.map((singleNews) => (
                <News key={singleNews.url} singleNews={singleNews} />
            ))}
        </div>
    );
};

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
};

export default NewsList;
