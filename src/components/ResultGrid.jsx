import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Error from './Error'
import HeroSection from './HeroSection';

function ResultGrid() {
    const { result, error, loading } = useSelector((state) => state.search);
    const home = useSelector((state) => state.Home.homeValue);

    if (!home) return <HeroSection />;

    if (loading) return <h1 className='text-center mt-10'>Loading....</h1>;

    if (error) return <Error message={error} />;


    return (
        <>
            <div className="columns-2 md:columns-4 gap-4 space-y-4 mt-5 mx-5 md:mx-8">
                {result.map((val, idx) => (
                    <div key={idx}>
                        <img
                            className="w-full rounded-lg object-cover transition-opacity duration-500 opacity-0"
                            src={val.url}
                            alt={`Result ${idx}`}
                            onLoad={(e) => e.target.classList.replace('opacity-0', 'opacity-100')}
                        />
                    </div>
                ))}
            </div>

        </>
    )
}

export default ResultGrid