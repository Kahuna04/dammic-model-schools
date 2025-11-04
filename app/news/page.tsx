import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { Suspense } from "react";
import { NewsGridSkeleton } from "@/components/SkeletonLoader";

async function NewsList() {
  let posts: any[] = [];
  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (e) {
    posts = [];
  }

  const fallback = Array.from({ length: 3 }).map((_, i) => ({
    slug: `sample-post-${i + 1}`,
    title: `Sample news headline ${i + 1}`,
    excerpt: "This is placeholder content. Replace with real news from your school.",
    publishedAt: "2025-01-01",
    coverImage: null,
  }));

  const list = posts.length ? posts : fallback;

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {list.map((p) => (
          <article key={p.slug} className="rounded-xl border border-brand-green/10 bg-white p-6">
            {p.coverImage ? (
              <Image
                src={urlFor(p.coverImage).width(800).height(500).url()}
                alt={p.title}
                width={800}
                height={500}
                className="rounded-md"
              />
            ) : null}
            <h3 className="mt-3 font-semibold text-brand-dark">{p.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{p.publishedAt?.slice(0, 10)}</p>
            <p className="mt-2 text-gray-800">{p.excerpt}</p>
            <Link href={`/news/${p.slug}`} className="mt-3 inline-block underline">Read more →</Link>
          </article>
        ))}
      </div>
      {!posts.length && (
        <p className="text-xs text-gray-600 mt-4">No posts yet — showing sample content. Add News in the CMS.</p>
      )}
    </>
  );
}

export default function Page() {
  return (
    <div className="space-y-6">
      <Section title="News & Updates" intro="School announcements, events and achievements.">
        <Suspense fallback={<NewsGridSkeleton />}>
          <NewsList />
        </Suspense>
      </Section>
    </div>
  );
}
