import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/src/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Pox() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                    Posts
                </h1>
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <li key={post._id} className="group">
                            <Link 
                                href={`${post.slug.current}`} 
                                className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-200 hover:border-slate-300 group-hover:-translate-y-1"
                            >
                                <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-slate-500 font-medium">
                                    {new Date(post.publishedAt).toLocaleDateString('az-AZ', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}