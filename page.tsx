'use client';

import { useState } from 'react';

interface Album {
  id: number;
  title: string;
  artist: string;
  year: string;
  genre: string;
  image: string;
  spotify: string;
  apple: string;
  youtube: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "앨범 제목",
    artist: "아티스트",
    year: "2024",
    genre: "K-Pop",
    image: "/covers/1.jpg",
    spotify: "https://spotify.com",
    apple: "https://music.apple.com",
    youtube: "https://music.youtube.com",
  },
];

const PER_PAGE = 16;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState<Album | null>(null);

  const totalPages = Math.ceil(albums.length / PER_PAGE);
  const start = currentPage * PER_PAGE;
  const slice = albums.slice(start, start + PER_PAGE);

  return (
    <main style={{ background: '#F8F8F6', minHeight: '100vh', fontFamily: 'Pretendard, -apple-system, sans-serif' }}>

      {/* 네비게이션 */}
      <nav style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        padding: '28px 40px 24px', borderBottom: '0.5px solid rgba(0,0,0,0.1)',
      }}>
        <div style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.45, letterSpacing: '0.04em', color: '#0a0b0b' }}>
          Album<br />Cover<br />Archive
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0b0b" strokeWidth="1.5" style={{ cursor: 'pointer' }}>
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
      </nav>

      {/* 그리드 */}
      <div style={{ padding: '32px 40px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px',
        }}>
          {slice.map((album, i) => (
            <div
              key={album.id}
              onClick={() => setSelected(album)}
              style={{ cursor: 'pointer', position: 'relative', aspectRatio: '1', borderRadius: '2px', overflow: 'hidden' }}
              className="album-item"
            >
              <img
                src={album.image}
                alt={album.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.style.background = '#ddd';
                }}
              />
              <div className="hover-info" style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', padding: '14px', opacity: 0,
                transition: 'opacity 0.35s ease', background: 'rgba(0,0,0,0.15)',
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.06em', marginBottom: '3px' }}>{album.year}</div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#fff' }}>{album.artist}</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {album.spotify && (
                    <a href={album.spotify} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#0a0b0b', fontSize: '13px' }}>
                      S
                    </a>
                  )}
                  {album.apple && (
                    <a href={album.apple} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#0a0b0b', fontSize: '13px' }}>
                      A
                    </a>
                  )}
                  {album.youtube && (
                    <a href={album.youtube} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#0a0b0b', fontSize: '13px' }}>
                      Y
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px 28px' }}>
        <span style={{ fontSize: '12px', color: '#888' }}>
          {start + 1}–{Math.min(start + PER_PAGE, albums.length)} / {albums.length} covers
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} disabled={currentPage === 0}
            style={{ fontFamily: 'Pretendard, sans-serif', fontSize: '12px', color: '#0a0b0b', background: 'none', border: '0.5px solid rgba(0,0,0,0.2)', borderRadius: '2px', padding: '6px 14px', cursor: 'pointer', opacity: currentPage === 0 ? 0.3 : 1 }}>
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setCurrentPage(i)}
              style={{ fontFamily: 'Pretendard, sans-serif', fontSize: '12px', color: currentPage === i ? '#F8F8F6' : '#0a0b0b', background: currentPage === i ? '#0a0b0b' : 'none', border: '0.5px solid rgba(0,0,0,0.2)', borderRadius: '2px', padding: '6px 14px', cursor: 'pointer' }}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))} disabled={currentPage === totalPages - 1}
            style={{ fontFamily: 'Pretendard, sans-serif', fontSize: '12px', color: '#0a0b0b', background: 'none', border: '0.5px solid rgba(0,0,0,0.2)', borderRadius: '2px', padding: '6px 14px', cursor: 'pointer', opacity: currentPage === totalPages - 1 ? 0.3 : 1 }}>
            →
          </button>
        </div>
      </div>

      {/* 푸터 */}
      <footer style={{
        background: '#F8F8F6', borderTop: '0.5px solid rgba(0,0,0,0.1)',
        padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.45, letterSpacing: '0.04em', color: '#0a0b0b', marginBottom: '14px' }}>
            Album<br />Cover<br />Archive
          </div>
          <div style={{ fontSize: '11px', color: '#aaa', lineHeight: 1.7, maxWidth: '380px' }}>
            This website is operated for non-commercial purposes only.<br />
            All rights to the images belong to their respective owners.
          </div>
        </div>
        <div style={{ fontSize: '11px', color: '#bbb', textAlign: 'right', lineHeight: 2 }}>
          © 2026 Album Cover Archive<br />
          Instagram
        </div>
      </footer>

      {/* 상세 오버레이 */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: '#F8F8F6', display: 'flex',
            animation: 'fadeIn 0.4s ease',
          }}>
          <div style={{ width: '50%', overflow: 'hidden', animation: 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
            <img src={selected.image} alt={selected.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { (e.target as HTMLImageElement).style.background = '#ddd'; }} />
          </div>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '50%', padding: '52px 48px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              animation: 'slideIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both',
            }}>
            <button onClick={() => setSelected(null)}
              style={{ position: 'absolute', top: '28px', right: '36px', background: 'none', border: 'none', cursor: 'pointer', color: '#0a0b0b', fontFamily: 'Pretendard, sans-serif', fontSize: '12px', letterSpacing: '0.04em' }}>
              ✕ Close
            </button>
            <div>
              <div style={{ fontSize: '11px', color: '#aaa', letterSpacing: '0.08em', marginBottom: '20px' }}>
                No. {String(selected.id).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '28px', fontWeight: 500, color: '#0a0b0b', letterSpacing: '-0.01em', marginBottom: '6px' }}>{selected.title}</div>
              <div style={{ fontSize: '15px', color: '#555', marginBottom: '40px' }}>{selected.artist}</div>
              <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)', paddingTop: '20px', marginBottom: '40px' }}>
                {[['Year', selected.year], ['Artist', selected.artist], ['Genre', selected.genre]].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '0.5px solid rgba(0,0,0,0.06)', fontSize: '13px' }}>
                    <span style={{ color: '#aaa' }}>{label}</span>
                    <span style={{ color: '#0a0b0b', fontWeight: 500 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: selected.spotify, label: 'Spotify' },
                { href: selected.apple, label: 'Apple Music' },
                { href: selected.youtube, label: 'YouTube Music' },
              ].map(({ href, label }) => href && (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'Pretendard, sans-serif', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0a0b0b', background: 'none', border: '0.5px solid rgba(0,0,0,0.2)', borderRadius: '2px', padding: '10px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        .album-item img { transition: filter 0.35s ease; }
        .album-item:hover img { filter: grayscale(100%); }
        .album-item:hover .hover-info { opacity: 1 !important; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.96); } to { transform: scale(1); } }
        @keyframes slideIn { from { transform: translateX(24px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </main>
  );
}
