import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { FaWhatsapp } from 'react-icons/fa';
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
        <a href="https://wa.me/+917770877117" target="_blank" rel="noopener noreferrer">
        <div
            onClick={scrollToTop}
            id="back-to-top"
            className=" rounded-pill "
            style={{
                position: 'fixed',
                bottom: '85px',
                right: '20px',
                cursor: 'pointer',
                display: 'inline',
                backgroundColor: '#25D366',
                width: '60px',
                height : '60px',
            }}
        >
            <div className='d-flex justify-content-center align-items-center'>
         <FaWhatsapp className="fea icons align-middle mt-2 text-white" 
         style={{fontSize:"42px"}}  />
         </div>
        </div>
        </a>
        
        </Container>
    );
}

const  Container = styled.div`
// .whatsup-only {
//     position: fixed;
//     z-index: 99;
//     bottom: 30px;
//     right: 30px;
//     display: none;
//     transition: all 0.5s ease;
//     height: 60px;
//     width: 60px;
//     line-height: 34px;
//     text-align: center;
//     background: $primary;
//     color: $white !important;
//     .icons {
//         transition: all 0.5s ease;
//     }
// }
    // .fea{
    // font-size:40px;
    // } 
;`
