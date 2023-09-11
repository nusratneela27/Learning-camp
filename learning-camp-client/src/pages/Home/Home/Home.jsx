import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Classes from '../Classes/Classes';
import MeetOurClient from '../MeetOurClient/MeetOurClient';
import Instructors from '../Instructors/Instructors';
import ExtraSection from '../ExtraSection/ExtraSection';
import BlogAndArticles from '../BlogAndArticles/BlogAndArticles';
import Count from '../Count/Count';
import Teaching from '../Teaching/Teaching';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>e Crft | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <ExtraSection></ExtraSection>
            <Instructors></Instructors>
            <MeetOurClient></MeetOurClient>
            <Teaching></Teaching>
            <Count></Count>
            <BlogAndArticles></BlogAndArticles>
        </div>
    );
};

export default Home;