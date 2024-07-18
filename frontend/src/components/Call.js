import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ScrollTop() {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    return (
        <Container> 
        <a href="htel:+91-7770877117" target="_blank" rel="noopener noreferrer">
        <div
            onClick={scrollToTop}
            id="back-to-top"
            className=" rounded-pill "
            style={{
                position: 'fixed',
                bottom: '150px',
                right: '20px',
                cursor: 'pointer',
                display: 'inline',
                backgroundColor: '#202942',
                width: '60px',
                height : '60px',
            }}
        >
            <div className='d-flex justify-content-center align-items-center'>
         <FiPhoneCall className="fea icons align-middle mt-2 text-white" 
         style={{fontSize:"38px"}}  />
         </div>
        </div>
        </a>
        
        </Container>
        
    );
} 
const Container = styled.div`

`; 