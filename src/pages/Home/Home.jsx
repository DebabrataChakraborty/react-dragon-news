import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import BreakingNews from '../BreakingNews/BreakingNews';
import NewsCard from '../NewsCard/NewsCard';
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className='text-3xl font-poppins'>this is home</h1>

           <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
           <div>
                <LeftSideNav></LeftSideNav>
            </div>


            <div className='md:col-span-2'>
              {
                news.map(aNews => <NewsCard
                key={aNews._id}
                news ={aNews}
                    ></NewsCard> )
              }
            </div>

            <div>
                <RightSideNav></RightSideNav>
            </div>
           </div>

        </div>


    );
};

export default Home;