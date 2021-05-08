import React, { useState, useEffect } from 'react';
//import Fuse from 'fuse.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CardGrid, Container, Header, SubmitMe } from './Styled'; //styled components
import Search from './components/Search';
import Movie from './components/Movie.jsx';

const slugify = require('slugify');

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'apikey=15b7ffe4';
const API_TYPE = '&type=movie'
    //for the purposes of this prompt movies only. type can be removed or replaced with series or episode
const App = () => {

    const [loading, setLoading] = useState(true),
        [movies, setMovies] = useState([]),
        [query, setQuery] = useState(''),
        [nominations, setNominations] = useState([]);

    const onSubmitHandler = () => {
        axios 
        .get(`${API_URL}?s="${query}"&${API_KEY}`)
        .then(res => {
            console.log(res);
            console.log(res.data.Search);
            console.log(`${API_URL}?s=${query}&${API_KEY}&${API_TYPE}`);
            console.log("I am here");
            setMovies(res.data.Search);
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const onNominateHandler = match => {
        if(nominations.length === 5) {
            alert("You have selected 5 movies");
        } else {
            const temp = [...nominations];
            temp.push(match);
            setNominations(temp);
        }
    }

    return (
        <div>
            <Header>
                <h1>
                    The Shoppies Nominations!
                </h1>
            </Header>
            <Container>
                    <Search
                        onChange={e => setQuery(slugify(e.target.value, '+'))}
                        onSubmitHandler = {onSubmitHandler}
                        value={query}
                        placeholder="Search" 
                        />
                    <CardGrid>
                        <>
                        {movies.map((match, i) => (
                                <Movie
                                    key={i}
                                    title={match.Title}
                                    poster={match.Poster} 
                                    year={match.Year} {...movies} >
                                    <SubmitMe type="submit" 
                                        onClick={e => onNominateHandler(match)}>
                                        Nominate
                                    </SubmitMe>
                                </Movie>
                            ))}
                        </>
                </CardGrid>
            </Container>
        </div>
    )
}

export default App;