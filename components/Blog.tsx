import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogPosts } from './blogData';

const Blog: React.FC = () => {
  return (
    <div className="bg-nature-light min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
            <h1 className="font-display text-5xl md:text-7xl text-nature-dark mb-6">LE JOURNAL</h1>
            <p className="font-serif text-xl text-nature-muted max-w-2xl mx-auto">
                Retours d'expériences, notes de terrain et réflexions sur la médiation scientifique.
            </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
                <article key={post.id} className="flex flex-col group">
                    <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-2xl mb-6 shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="relative h-80 overflow-hidden">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-nature-dark px-3 py-1 text-xs font-bold font-display tracking-widest uppercase rounded">
                                {post.category}
                            </div>
                        </div>
                    </Link>

                    <div className="flex-grow space-y-4">
                        <div className="flex items-center gap-4 text-xs text-nature-muted font-serif uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span className="w-1 h-1 bg-nature-accent rounded-full"></span>
                            <span className="flex items-center gap-1"><Tag size={14} /> {post.tags[0]}</span>
                        </div>

                        <Link to={`/blog/${post.id}`}>
                            <h2 className="text-3xl font-display text-nature-dark group-hover:text-nature-accent transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                        
                        <p className="font-serif text-nature-muted text-lg leading-relaxed">
                            {post.subtitle}
                        </p>

                        <Link 
                            to={`/blog/${post.id}`} 
                            className="inline-flex items-center gap-2 text-nature-dark font-bold font-display tracking-widest text-sm hover:text-nature-accent transition-colors pt-2"
                        >
                            LIRE L'ARTICLE <ArrowRight size={16} />
                        </Link>
                    </div>
                </article>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;