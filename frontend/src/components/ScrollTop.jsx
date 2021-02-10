import React from 'react';
import styled from 'styled-components';
import {getVW} from '../lib/calculate';

function ScrollTop() {
  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <Button onClick={onScrollTop}>
      <img src="../images/top_button.png" alt="scroll top" />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 100px;
  right: 100px;
  padding: 0;
  background: none;
  border: none;

  @media ${({theme}) => theme.devices.lg} {
    bottom: max(20px, ${({theme}) => getVW(100, theme.size.lg)});
    right: max(20px, ${({theme}) => getVW(100, theme.size.lg)});
  }
`;

export default ScrollTop;
