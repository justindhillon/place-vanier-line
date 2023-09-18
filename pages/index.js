import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Button />
      <Test />

    </Layout>
  );
}

function Test() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/readFile', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      <h1>My Framework from file</h1>
      <ul>
        <li>Name: {data.record.name}</li>
        <li>Language: {data.record.language}</li>
      </ul>
    </div>
  );
}

function Button() {
  async function handleClick() {
    let data = await fetch("pages/api/readFile.js");
    console.log(data);
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
