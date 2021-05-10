import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CardGrid, Container, Header, SubmitMe } from './Styled'; //styled components
import Search from './components/Search';
import Movie from './components/Movie.jsx';
import {isAlreadyThere} from './components/helpers';
import { NomStyle, variants, ulVariants, liVariants } from './components/Nominations';

const slugify = require('slugify');

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'apikey=15b7ffe4';
const API_TYPE = '&type=movie'
    //for the purposes of this prompt movies only. type can be removed or replaced with series or episode 
    //this works in the api call but for some reason it is still accessing the API 
const App = () => {

    const [loading, setLoading] = useState(true),
        [movies, setMovies] = useState([]),
        [query, setQuery] = useState(''),
        [nominations, setNominations] = useState([]),
        [titles, setTitles] = useState([]),
        [errors, setErrors] = useState(''),
        [isOpen, setIsOpen] = useState(false); 
        
    const onSubmitHandler = () => {
        axios 
        .get(`${API_URL}?s="${query}"&${API_KEY}`)
        .then(res => {
            console.log(res);
            console.log(res.data.Search);
            console.log(`${API_URL}?s=${query}&${API_KEY}&${API_TYPE}`);
            console.log("I am here");
            if(res.data.Search === undefined) {
                setErrors('This movie is unavailable please try to nominate something else.')
            } else if(res.data.Search === ''){
                setErrors('');
            } else {
                setMovies(res.data.Search);
                setLoading(false);
            }
            // setMovies(res.data.Search);
            // setLoading(false);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const onNominateHandler = match => {
        if(nominations.length === 5) {
            alert("You have selected 5 movies");
        } else if (isAlreadyThere(match, nominations)){
            alert("You have already nominated this movie");
        } else {
            const temp = [...nominations];
            const tempTitles = [...titles]
            temp.push(match);
            tempTitles.push(match.Title);
            setNominations(temp);
            setTitles(tempTitles);
          } 
    }

    return (
        <div>
            <Header>
                <h1>
                    The Shoppies Nominations!
                </h1>
                 <SubmitMe onClick={() => setIsOpen(true)} style={{textDecoration: "none"}}>
                    Nominations
                </SubmitMe> 
                <NomStyle 
                    variants={variants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{damping: 300}}
                >
                    <SubmitMe style={{marginLeft: "-300px", marginTop: "-300px", marginBottom: "10px"}} onClick={() => setIsOpen(false)}>
                        Close
                    </SubmitMe>
                    <motion.ul>
                    {titles.map((nomination) => 
                        <motion.li>{nomination}</motion.li>)}
                    </motion.ul>
                </NomStyle>
            </Header>
            <Container>
                    <Search
                        onChange={e => setQuery(slugify(e.target.value, '+'))}
                        onSubmitHandler = {onSubmitHandler}
                        value={query}
                        placeholder="Search"
                        />
                        <div>{errors}</div>
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