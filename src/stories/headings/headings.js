import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.section`
    margin: 10px;
`;

const Heading1 = () => (
    <HeadingWrapper>
        <h1>A simple H1 without any classes/modifications</h1>
    </HeadingWrapper>
);

export default Heading1;
