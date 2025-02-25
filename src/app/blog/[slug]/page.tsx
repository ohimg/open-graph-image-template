import { getAllPosts, getPostBySlug } from "@/app/blog/lib/posts";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  // const post = getPostBySlug(resolvedParams.slug);

  return {
    // title: slug,
    openGraph: {
      images: `/blog/${resolvedParams.slug}/og.png`,
    },
  };
}

export default async function Post({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const config = getPostBySlug(slug);

  if (!config) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col items-center -mt-2">
      {JSON.stringify(config)}
    </div>
  );
}
