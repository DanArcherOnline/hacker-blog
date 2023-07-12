import Homepage from "@/components/Homepage";
import { getCertificates, getCtfBadges, getFeaturedPost, getPosts } from "@/sanity/sanity-utils";

export const revalidate = 60

export default async function Home() {
  const posts = await getPosts()
  const featuredPost = await getFeaturedPost()
  const certificates = await getCertificates()
  const ctfBadges = await getCtfBadges()

  return (
    <Homepage
      posts={posts}
      featuredPost={featuredPost.post}
      certificates={certificates}
      ctfBadges={ctfBadges}
    />
  )
}
