import { ImageResponse } from 'next/og'

export const alt = 'Shreyansh Vishwakarma Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #09090b, #18181b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '40px 80px',
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            <div style={{ padding: '8px 20px', borderRadius: '100px', background: '#3178c6', color: '#fff', fontSize: '24px', fontWeight: 'bold', display: 'flex' }}>TypeScript</div>
            <div style={{ padding: '8px 20px', borderRadius: '100px', background: '#e43716', color: '#fff', fontSize: '24px', fontWeight: 'bold', display: 'flex' }}>Rust</div>
            <div style={{ padding: '8px 20px', borderRadius: '100px', background: '#ffffff', color: '#000', fontSize: '24px', fontWeight: 'bold', display: 'flex' }}>Next.js</div>
          </div>
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 800,
              color: 'white',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            Shreyansh Vishwakarma
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#a1a1aa',
              margin: 0,
              maxWidth: '800px',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            I am a full-stack developer specializing in building high-performance backend systems with Rust and scalable, real-time web applications using TypeScript.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
