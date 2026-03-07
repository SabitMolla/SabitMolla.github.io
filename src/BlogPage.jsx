import React from 'react';
import useDocumentTitle from './useDocumentTitle';

export default function BlogPage() {
  useDocumentTitle('Blog | Molla MD Sabit');
  const posts = [
    {
      id: 1,
      title: 'Building a Personal Portfolio with Vite + React',
      date: '2025-11-10',
      excerpt: 'How I set up a fast developer experience using Vite, routing, and deploy tips.'
    },
    {
      id: 2,
      title: 'Responsive Navigation Patterns in React',
      date: '2025-09-02',
      excerpt: 'Approaches for accessible, animated and mobile-friendly navigation components.'
    }
  ];

  return (
    <main style={{ padding: '6rem 1rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '0.25rem' }}>Blog</h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>Notes, case studies and walkthroughs on projects and frontend engineering.</p>

      <section style={{ display: 'grid', gap: '1rem' }}>
        {posts.map(post => (
          <article key={post.id} style={{ padding: '1rem', borderRadius: '12px', background: '#fff', boxShadow: '0 6px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ margin: 0 }}>{post.title}</h2>
            <small style={{ color: '#777' }}>{post.date}</small>
            <p style={{ color: '#333' }}>{post.excerpt}</p>
            <a href="#" style={{ color: '#27408B', fontWeight: '600', textDecoration: 'none' }}>Read more →</a>
          </article>
        ))}
      </section>
    </main>
  );
}
