import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Tag } from 'lucide-react';
import { useBlogPost, useSanitizedHTML } from '@/hooks';

/**
 * Article de blog detaille.
 */
export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading } = useBlogPost(slug);
  const { sanitized, error } = useSanitizedHTML(post?.content || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-nature-light pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="h-[50vh] bg-nature-dark/10 rounded-3xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-nature-light text-center px-4">
        <h2 className="font-display text-4xl text-nature-dark mb-4">Article introuvable</h2>
        <Link to="/blog" className="text-nature-accent hover:underline">
          Retour au journal
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-nature-light pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800">
              Une erreur de securite a ete detectee dans le contenu.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-nature-light min-h-screen pt-24 pb-20 animate-in fade-in duration-500">
      <div className="w-full h-[50vh] relative mb-12 overflow-hidden">
        <img src={post.coverImage.url} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-display tracking-widest transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> RETOUR AU JOURNAL
            </Link>
            <h1 className="text-4xl md:text-6xl font-display text-white mb-4 leading-tight max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 font-serif text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {post.publishedAt}
              </span>
              <span className="bg-nature-accent px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex gap-2 mb-8 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs text-nature-muted bg-nature-dark/5 px-3 py-1 rounded-full"
            >
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>

        <div
          className="prose prose-lg prose-headings:font-display prose-headings:text-nature-dark prose-p:font-serif prose-p:text-nature-text prose-a:text-nature-accent hover:prose-a:text-nature-dark prose-img:rounded-xl"
          // Sanitization mandatory to prevent XSS with HTML content.
          dangerouslySetInnerHTML={{ __html: sanitized }}
        ></div>

        <div className="mt-16 pt-8 border-t border-nature-dark/10 flex justify-between items-center">
          <span className="font-display text-nature-dark font-bold">Partager cet article</span>
          <div className="flex gap-4">
            <button className="p-2 rounded-full hover:bg-nature-dark/5 transition-colors text-nature-muted hover:text-nature-accent">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="inline-block px-10 py-4 border-2 border-nature-dark text-nature-dark font-display tracking-widest hover:bg-nature-dark hover:text-nature-light transition-all duration-300"
          >
            ME CONTACTER POUR UN PROJET SIMILAIRE
          </Link>
        </div>
      </div>
    </article>
  );
}
