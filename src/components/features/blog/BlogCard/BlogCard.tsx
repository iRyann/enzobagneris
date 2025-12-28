import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types';

/**
 * Props du composant BlogCard.
 */
export interface BlogCardProps {
  post: BlogPost;
}

/**
 * Carte d'article de blog.
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col group">
      <Link
        to={`/blog/${post.slug}`}
        className="block overflow-hidden rounded-2xl mb-6 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-80 overflow-hidden">
          <img
            src={post.coverImage.url}
            alt={post.coverImage.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-nature-dark px-3 py-1 text-xs font-bold font-display tracking-widest uppercase rounded">
            {post.category}
          </div>
        </div>
      </Link>

      <div className="flex-grow space-y-4">
        <div className="flex items-center gap-4 text-xs text-nature-muted font-serif uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {post.publishedAt}
          </span>
          <span className="w-1 h-1 bg-nature-accent rounded-full"></span>
          <span className="flex items-center gap-1">
            <Tag size={14} /> {post.tags[0]}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-3xl font-display text-nature-dark group-hover:text-nature-accent transition-colors">
            {post.title}
          </h2>
        </Link>

        <p className="font-serif text-nature-muted text-lg leading-relaxed">{post.subtitle}</p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-nature-dark font-bold font-display tracking-widest text-sm hover:text-nature-accent transition-colors pt-2"
        >
          LIRE L'ARTICLE <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
