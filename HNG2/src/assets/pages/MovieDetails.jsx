import React from 'react';
import Sidebar from '../components/pages/Sidebar';
import Details from '../components/pages/Details';



export default function Home() {

    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <Details />
            </div>
        </>
    )
}
