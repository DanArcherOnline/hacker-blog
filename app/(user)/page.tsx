import Homepage from "@/components/Homepage";
import { getPosts } from "@/sanity/sanity-utils";

export default async function Home() {
  const posts = await getPosts()
  return (
    <Homepage posts={posts} />
  )
}
