import Image from 'next/image';

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
  return (
    <div className="">
      <img src={data.message} alt="gog" />
    </div>
  );
}
