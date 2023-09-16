import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { readData } from './editfile';
import { writeData } from './editfile';
import React from 'react';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Button />

    </Layout>
  );
}

function Button() {
  function handleClick() {
    writeData("data.txt", getCurrentTime());
    console.log(readData("data.txt"))
  }

  function getCurrentTime(separator=''){
    let newDate = new Date()
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    minute = (Math.round(minute/15) * 15) % 60;
    
    return `${hour}${separator}${minute}`
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
