import Image from "next/image";
import PostList from "@/components/Cards/PostList";


export default function Home() {
  return (
    <div className=" container pt-6">
      <PostList />
    </div>
  );
}
