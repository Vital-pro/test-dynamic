// 'use client';
import Image from 'next/image';
// import React, { useState, useEffect } from 'react';

async function getData() {
  const result = await fetch(process.env.API_URL, {
    next: {
      // revalidate: 60,
    },
  });
  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }
  return result.json();
}

export default async function Home() {
  const data = await getData();
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
    </div>
  );
}
