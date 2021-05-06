import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Header = styled.header`
    background: var(--darkGreen);
    color: var(--offWhite);
    padding: 20px;
    h1 {
        color: var(--offWhite);
        text-shadow: 3px 2px var(--black);
    }
`;

export const Container = styled.div`
    width: 95%;
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 60px;
    h2 {
        color: var(--green);
    }
    div {
        color: var(--lime);
    }
`;

export const Form = styled.div`
    margin-left: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    input {
        width: 300px;
        margin-top: 15px;
    }
`;

export const SubmitMe = styled.button`
    background-color: var(--darkGreen);
    color: var(--lime);
    border: 1px solid var(--white);
    border-radius: 5px;
    height: 30px;
    margin-left: 10px;
    margin-right: 20px;
    text-decoration: none;
    padding: -5px;
    &:hover {
        background-color: var(--green);
        color: var(--offWhite);
        border: 1px solid var(--black);
    }
`;

export const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap; 
    width: 1500px;
    margin-left: -400px;
`;

export const Card = styled(motion.div)`
    border-radius: 15px;
    padding: 15px;
    margin: 10px;
    width: max-content;
    height: 220px;
    background-color: var(--darkGreen);
    box-shadow: 1px 1px 15px rgba(0,0,0,0.4);
    h1 {
        color: var(--lime);
        font-size: 1.5rem;
    }
    img {
        width: 100px;
    }
`;