import { useBlogPosts } from '@/hooks';
import { BlogCard } from '../BlogCard/BlogCard';
import { BlogHeader } from '../BlogHeader/BlogHeader';

/**
 * Liste des articles du blog.
 */
export function BlogList() {
  const { posts, loading, error } = useBlogPosts();

  if (loading) {
    return (
      <div className="bg-nature-light min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <BlogHeader />
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-96 bg-nature-dark/10 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-nature-light min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-nature-dark mb-4">Erreur de chargement</h2>
          <p className="text-nature-muted">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-nature-light min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <BlogHeader />
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
