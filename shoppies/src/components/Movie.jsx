import React from 'react';
import { Card, CardGrid } from '../Styled';
import axios from 'axios';
import { Link } from '@reach/router';

export default ({title, poster}) => {

    return(
        <div>
            <Card>
                <h1>{title}</h1>
                <img src={poster} alt={title} />
            </Card>
        </div>
    )
}