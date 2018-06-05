import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import configureStore from './config/store';
import Intro from './components/intro';
import PersonOverview from './components/overview/PersonOverview';

const Main = styled.section`
    background-color: #fff;
    padding: 30px;
    position: relative;
    margin: 30px auto;
    max-width: 1100px;
`;


const store = configureStore();

const App = () => (
    <Main>
        <Intro />
        <Provider store={store}>
            <PersonOverview />
        </Provider>
    </Main>
);

export default App;
