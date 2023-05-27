// import React from 'react';

import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;