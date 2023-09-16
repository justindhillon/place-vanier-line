import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import React from 'react';
import { writeFileSync } from 'fs';
import { readFileSync } from 'fs';

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
    writeFileSync('data/chart.json', getCurrentTime());
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
