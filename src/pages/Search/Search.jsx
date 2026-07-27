import "./Search.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../../component/SearchBar/SearchBar";

import {
    latestNews,
    categoryNews,
    videoNews,
    mostRead
} from "../../data/news";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const allNews = [

        ...latestNews,

        ...categoryNews.Politics,

        ...categoryNews.Sports,

        ...categoryNews.Technology,

        ...categoryNews.Business,

        ...videoNews,

        ...mostRead

    ];

    const filteredNews = allNews.filter(news =>

        news.title.toLowerCase().includes(searchTerm.toLowerCase())

    );

    return (

        <div className="search-page">

            <h1>Search News</h1>

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <div className="search-results">

                {
                    filteredNews.length > 0 ?

                        filteredNews.map(news => (

                            <Link

                                key={news.id}

                                to={`/news/${news.id}`}

                                className="search-card"

                            >

                                <img
                                    src={news.image}
                                    alt={news.title}
                                />

                                <div>

                                    <h3>{news.title}</h3>

                                    <p>

                                        {
                                            news.category
                                                ? news.category
                                                : "Latest News"
                                        }

                                    </p>

                                </div>

                            </Link>

                        ))

                        :

                        <h2>No News Found.</h2>

                }

            </div>

        </div>

    );

}

export default Search;