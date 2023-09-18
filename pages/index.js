import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home({ initialData }) {
  const [data, setData] = useState(initialData);

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
  async function fetchData() {
    const { data, error } = await useSWR('/api/readFile', fetcher);
    return data;
  }

  function handleClick(event) {
    event.preventDefault();
    fetchData();
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
  const req = await fetch('https://randomuser.me/api/?gender=female&results=10');
  const data = await req.json();
  return { initialData: data.results };
}
