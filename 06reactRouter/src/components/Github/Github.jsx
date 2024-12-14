import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Github = () => {
    const [data, setData] = useState(0);
    useEffect(() => {
        fetch('https://api.github.com/users/loveBabbar')
            .then((res) => res.json())
            .then(data => setData(data));
    }, [])


    return (
        <div
            className='bg-orange-200 p-2 font-bold 
    text-lg flex items-center gap-x-3 max-w-[40%] '>

        <img className='' 
        src={data.avatar_url} alt="Git_picture" width={150}/>

            {data.login} <br />
            Followers: {data.followers}
        </div>
    )
}

export default Github
