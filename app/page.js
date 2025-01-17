// 'use client';
import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
export const fetchCache = 'force-no-store';

async function getData() {
  const result = await fetch(process.env.API_URL, {
    next: {
      // revalidate: 20,
      cache: 'no-store',

    },
  });
  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }
  return result.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data)
  // const [state, setState] = useState('');

  // useEffect(() => {
  //   const result = fetch(process.env.API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState(data);
  //       console.log(data);
  //       console.log(result);
  //     });
  // }, []);
  return (
    <div className=''>
      <img width={250} height={250} src={data.message} alt='dog' />
{/* 
      {
        data.map((el, idx) => {
          return (
            <>
            <p>{el.title}</p>
            <img src={el.imageUrl} alt="logo" />
            </>
          )
        })
      } */}
    </div>
  );
}
