import PostList from "@component/posts";
import MiniProfile from "@component/right-sidebar/mini-profile";
import Suggestions from "@component/right-sidebar/suggestions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "@me",
  description: "Home page",
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:mx-auto lg:grid-cols-3 sm:px-[50px] md:px-[100px] lg:px-[20px] lg:max-w-5xl">
      <section className="col-span-1 lg:col-span-2">
        <PostList />
      </section>
      <section className="hidden lg:block lg:col-span-1 ml-5">
        <div className="rounded-md sticky top-[94px] shadow-main_shadow bg-white px-6 py-8">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
