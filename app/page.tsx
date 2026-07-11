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
    title: "Heavy Serenade",
    artist: "NMIXX",
    year: "2026",
    genre: "K-Pop",
    image: "/covers/01_26_HeavySerenade_NMIXX.jpg",
    spotify: "https://open.spotify.com/album/0TOh2mF9pf00hxvePxpJFj",
    apple: "https://music.apple.com/kr/album/heavy-serenade-ep/1892954835",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_md4y1seQXLJ2UE-1bsVLeCjP4QvIbl4kM",
  },

  {
    id: 2,
     title: "Re-Make",
    artist: "Hyelyn Joo",
    year: "2025",
    genre: "Jazz",
    image: "/covers/02_25_ReMake_HyelynJoo.jpg",
    spotify: "https://open.spotify.com/album/7qjuU5f7Wh5XZ3OcCzOpOp",
    apple: "https://music.apple.com/kr/album/re-make/1852983533",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kUtX0HHK6V3qJ4OkGtMpgzMBdxkDhoSFo",
  },

{
    id: 3,
    title: "WDA (Whole Different Animal)",
    artist: "aespa",
    year: "2026",
    genre: "K-Pop",
    image: "/covers/03_26_WDA_aespa.jpg",
    spotify: "https://open.spotify.com/album/1zL6cXyNIMtyJtmj99fkSS",
    apple: "https://music.apple.com/kr/album/wda-whole-different-animal-feat-g-dragon-single/1894805931",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mGeBxJvlcXi_IDqkhzf-IPZRjkmGbr1X0",
  },

    {
    id: 4,
    title: "Say Yes!",
    artist: "FIFTY FIFTY & WeiBird",
    year: "2026",
    genre: "Mandopop",
    image: "/covers/04_26_SayYes!_FIFTYFIFTY.jpg",
    spotify: "https://open.spotify.com/album/0S7fk4aShJaOKaWz5iMjjp",
    apple: "https://music.apple.com/kr/album/say-yes-single/1889709882",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mPVkvbZjVxrFIB9lSgYC54gOrjhUSyp1o",
  },
    {
    id: 5,
    title: "Armageddon",
    artist: "aespa",
    year: "2024",
    genre: "K-Pop",
    image: "/covers/05_2024_Armageddon_aespa.webp",
    spotify: "https://open.spotify.com/album/3gHhPm8z8tid1kvpniUKuK",
    apple: "https://music.apple.com/kr/album/armageddon-the-1st-album/1745285216",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lZOwc-leIEDyAvoSVhtHj4gNixHkQp6LI",
  },
    {
    id: 6,
    title: "The Chase",
    artist: "Hearts2Hearts",
    year: "2025",
    genre: "K-Pop",
    image: "/covers/06_25_TheChase_H2H.webp",
    spotify: "https://open.spotify.com/album/2IjkSbisATTpSpVIlFVNkN",
    apple: "https://music.apple.com/kr/album/the-chase-single/1796402197",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mQaENdVi8R0G0p8Ha5r0dEr7hio8TiAhE",
  },
    {
    id: 7,
    title: "Bubee",
    artist: "ILLIT",
    year: "2026",
    genre: "J-Pop",
    image: "/covers/07_26_Bubee_ILLIT.webp",
    spotify: "https://open.spotify.com/album/7svAQjE0MysOpOEQRHD9D2",
    apple: "https://music.apple.com/kr/album/bubee-single/1890111381",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_l72KrfxAZhAed05BAhjrqNByJzD6J-6sA",
  },
  {
    id: 8,
    title: "Russian Roulette",
    artist: "Red Velvet",
    year: "2016",
    genre: "K-Pop",
    image: "/covers/08_16_RussianRoulette_RV.webp",
    spotify: "https://open.spotify.com/album/6MNlcai3skKLKv5syzFwC3",
    apple: "https://music.apple.com/kr/album/russian-roulette-the-3rd-mini-album/1151001050",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_msl4-ISMgc59nywaeB1A3WSt3Ei-MugeA",
  },
    {
    id: 9,
    title: "Imperfect-I'mperfect",
    artist: "FIFTY FIFTY",
    year: "2026",
    genre: "K-Pop",
    image: "/covers/09_26_Imperfect-I'mperfect_FIFTYFIFTY.webp",
    spotify: "https://open.spotify.com/album/5swL0neEWqHIorlT8qTk2p",
    apple: "https://music.apple.com/kr/album/imperfect-imperfect-ep/6770401101",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_n4JT8cOSu1bp4nE8nRLJJ_lGVeZRU5GlM",
  },
   {
    id: 10,
    title: "Summer Tales",
    artist: "Lacuna",
    year: "2022",
    genre: "Rock",
    image: "/covers/10_22_SummerTales_Lacuna.webp",
    spotify: "https://open.spotify.com/album/4zOhFGKRXA7Mwe6c0sJRXD",
    apple: "https://music.apple.com/kr/album/summer-tales-ep/1610978557",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nZX1dicP-Fvs-PETeiLNy51d-Z9XgFMsI",
  },
   {
    id: 11,
    title: "Recipe of Summer",
    artist: "Jang kiki",
    year: "2025",
    genre: "R&B/Soul",
    image: "/covers/11_25_ReciptofSummer_Jangkiki.webp",
    spotify: "https://open.spotify.com/album/6KH3ojIirdLY8LaZdw7ft8",
    apple: "https://music.apple.com/kr/album/recipe-of-summer-ep/1828841860",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nMYVZ0fNxpYZPxbegFlj8veP3Tk-R4PGY",
  },
   {
    id: 12,
    title: "summer flows 0.02",
    artist: "wave to earth",
    year: "2020",
    genre: "Alternative",
    image: "/covers/12_20_summerflows0.02_wavetoearth.webp",
    spotify: "https://open.spotify.com/album/5wRgLTi838V7ZE7PXGfCS9",
    apple: "https://music.apple.com/kr/album/summer-flows-0-02-ep/1781856626",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mW2-HLlOsPoHUnVyM5KS1FOBHoN1xKYnM",
  },
    {
    id: 13,
    title: "How Sweet",
    artist: "NewJeans",
    year: "2024",
    genre: "K-Pop",
    image: "/covers/13_24_howsweet_newjeans.webp",
    spotify: "https://open.spotify.com/album/0EhZEM4RRz0yioTgucDhJq",
    apple: "https://music.apple.com/kr/album/how-sweet/1744448415",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_l0nFJiyQV7ZaVmRh1gW9g1tk3UANGUipc",
  },
    {
    id: 14,
    title: "Moment",
    artist: "Peggy Gou",
    year: "2019",
    genre: "Dance",
    image: "/covers/14_19_Moment_PeggyGou.webp",
    spotify: "https://open.spotify.com/album/0bYW9weJ7SXRaBFbWuBQeI",
    apple: "https://music.apple.com/us/album/starry-night/1677874605",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_l_amcZbkTjO0-zUm8Q1WzIDXZTAjyFIJ8",
  },
  {
    id: 15,
    title: "SUPER REAL ME",
    artist: "ILLIT",
    year: "2024",
    genre: "K-Pop",
    image: "/covers/15_24_SRM_ILLIT.webp",
    spotify: "https://open.spotify.com/album/6irebIc6UO8fN0jl4UlzBS",
    apple: "https://music.apple.com/us/album/super-real-me-ep/1734500886",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mMXS9WvSvyWnDxL1kysT1lwo_HjlLd6d8",
  },
  {
    id: 16,
    title: "Toki Yo Tomare",
    artist: "ILLIT",
    year: "2025",
    genre: "J-Pop",
    image: "/covers/16_25_TYT_ILLIT.webp",
    spotify: "https://open.spotify.com/album/31H9k0JQ0gQBO0PbhP52w8",
    apple: "https://music.apple.com/us/album/toki-yo-tomare-ep/1833184647",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lKdGaJHXqZiC1oFpChKnxLlnCoSsbLaLE",
  },
  {
    id: 17,
    title: "NOT CUTE ANYMORE",
    artist: "ILLIT",
    year: "2025",
    genre: "K-Pop",
    image: "/covers/17_25_NCA_ILLIT.webp",
    spotify: "https://open.spotify.com/album/6wKHLrZczZAhDVsMEG4JXt",
    apple: "https://music.apple.com/us/album/not-cute-anymore-single/1849105513",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_m22yyMNSqCGR5lMlu6aDGpBC9lyvnU9gM",
  },
  {
  id: 18,
  title: "Fire From The Hip",
  artist: "Finn Wolfhard",
  year: "2026",
  genre: "Rock",
  image: "/covers/18_26_FFTH_Finn.webp",
  spotify: "https://open.spotify.com/album/43mE12XfH3PQ7iX3mPj2Ri",
  apple: "https://music.apple.com/us/album/follow/1891844033?i=1891844356",
  youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lcE9mBAKAVjXKHsh9GdIUatmY882uLqPU",
},
{
  id: 20,
  title: "Odd",
  artist: "SHINee",
  year: "2015",
  genre: "K-Pop",
  image: "/covers/20_15_Odd_SHINee.webp",
  spotify: "https://open.spotify.com/album/47zSQLQWjPLmiEbCpOOEJa",
  apple: "https://music.apple.com/us/album/odd-the-4th-album/994425103",
  youtube: "https://music.youtube.com/playlist?list=OLAK5uy_l0u4P1Iu9M1DjLfosZiEuTnzLTlMQQb-o",
},
  ];

const PER_PAGE = 16;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState<Album | null>(null);

  const totalPages = Math.ceil(albums.length / PER_PAGE);
  const start = currentPage * PER_PAGE;
const slice = [...albums].reverse().slice(start, start + PER_PAGE);

  return (
    <main style={{ background: '#F8F8F6', minHeight: '100vh', fontFamily: 'Pretendard, -apple-system, sans-serif' }}>

      {/* 네비게이션 */}
      <nav style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        padding: '28px 40px 24px', borderBottom: '0.5px solid rgba(0,0,0,0.1)',
      }}>
        <div style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.45, letterSpacing: '0.04em', color: '#0a0b0b' }}>
          Album Cover Archive
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
              style={{ cursor: 'pointer' }}
            >
            <div
              style={{ position: 'relative', aspectRatio: '1', borderRadius: '2px', overflow: 'hidden' }}
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
                transition: 'opacity 0.35s ease', background: 'transparent', transform: 'inherit',
              }}>
                <div>
                  <div style={{ fontSize: '21px', color: '#ffffff', letterSpacing: '0.06em', marginBottom: '3px' }}>{album.year}</div>
                  <div style={{ fontSize: '28px', fontWeight: 500, color: '#fff' }}>{album.artist}</div>
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
            <p style={{ fontSize: '18px', color: '#0a0b0b', fontWeight: 500, textAlign: 'center', marginTop: '10px', letterSpacing: '0.01em', fontFamily: 'Pretendard, sans-serif' }}>{album.title}</p>
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
          <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.45, letterSpacing: '0.04em', color: '#0a0b0b', marginBottom: '14px' }}>
            Album Cover Archive
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
        .album-item { transition: transform 0.3s ease; overflow: hidden; }
        .album-item:hover { transform: scale(0.93); }
        .album-item:active { transform: scale(0.98); }
        .album-item img { transition: filter 0.35s ease; }
        .album-item:hover img { filter: grayscale(100%); }
        .album-item:active img { filter: grayscale(0%); }
        .album-item:hover .hover-info { opacity: 1 !important; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.96); } to { transform: scale(1); } }
        @keyframes slideIn { from { transform: translateX(24px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </main>
  );
}
