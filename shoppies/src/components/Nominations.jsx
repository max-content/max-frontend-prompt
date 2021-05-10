//styled components specifically for animating the nominated movies

import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const NomStyle = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 25vw;
    height: 100vh;
    padding: 35px;
    background: var(--darkGreen);
    box-shadow: 3px 3px 50px var(--black);
    z-index: 10;
    ul {
        padding: 0;
        margin: 0;
    }
    li {
        display: block;
        text-align: left;
        padding: 0;
        margin: 0;
        font-size: 2rem;
        color: var(--lime);    
    }
`;

export const variants = {
    open: { x: 0 },
    closed: {x: "-100%",
        transition: {
                delay: 0.2
        }
    }
};

export const ulVariants = {
    open: {
        scale: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.05,
            staggerDirection: 1,
            when: "afterChildren"
        }
    },
    closed: {
        scale: 1
    }
};

export const liVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: -20, 
        opacity: 0
    }
};