import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Next.js Example</title>
      </Head>

      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-6">Next.js Posts</h1>
        <ul className="space-y-4">
          {posts?.map((post) => (
            <li key={post.id} className="p-4 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400">{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
