// async function getData() {
//   const response = await fetch(process.env.API_URL)
//   console.log(response.json())
//   return response.json()
// }

'use client'
export default function Test() {
  console.log(123123)
  // const post = await getData()
  return (
    <>
      <div>test</div>
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
}

