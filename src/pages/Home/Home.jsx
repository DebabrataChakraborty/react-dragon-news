import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import BreakingNews from '../BreakingNews/BreakingNews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className='text-3xl font-poppins'>this is home</h1>

           <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
           <div className='border border-blue-600'>
                <LeftSideNav></LeftSideNav>
            </div>


            <div className='md:col-span-2 border border-blue-800'>
                <h2 className='text-4xl'>news coming soon</h2>
            </div>

            <div className='border border-blue-800'>
                <RightSideNav></RightSideNav>
            </div>
           </div>

        </div>


    );
};

export default Home;