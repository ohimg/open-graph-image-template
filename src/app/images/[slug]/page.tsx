import { getAllConfigs, getConfigBySlug } from "@/app/images/lib/configs";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return getAllConfigs().map((config) => ({
    slug: config.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  // const post = getConfigBySlug(resolvedParams.slug);

  return {
    // title: slug,
    openGraph: {
      images: `/images/${resolvedParams.slug}/og.png`,
    },
  };
}

export default async function Post({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const config = getConfigBySlug(slug);

  if (!config) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col items-center -mt-2">
      {JSON.stringify(config)}
    </div>
  );
}
