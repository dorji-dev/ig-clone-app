import PostList from "@component/posts";

export default function Home() {

  return (
    <main className="grid grid-cols-1 md:mx-auto lg:grid-cols-3 lg:max-w-6xl">
      <section className="col-span-1 lg:col-span-2">
        <PostList />
      </section>
    </main>
  );
}
