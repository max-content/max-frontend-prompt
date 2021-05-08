import React from 'react';
import { Card } from '../Styled';

export default (props) => {

    return(
            <Card>
                <div className="flexy">
                    <h1>{props.title}</h1>
                    <p>({props.year})</p>
                </div>
                <img src={props.poster} alt={props.title} />
                {props.children}
            </Card>
    )
}