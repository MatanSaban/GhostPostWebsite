import { ImageResponse } from 'next/og';

export const runtime = 'edge';

/**
 * GET /api/og
 * Generate dynamic Open Graph images
 * 
 * Query params:
 * - title: Page title
 * - description: Page description (optional)
 * - page: Page type for styling (home, about, pricing, blog, etc.)
 * - locale: Language for RTL support
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  const title = searchParams.get('title') || 'Ghost Post';
  const description = searchParams.get('description') || 'AI-Powered SEO Automation';
  const page = searchParams.get('page') || 'default';
  const locale = searchParams.get('locale') || 'en';
  
  const isRtl = locale === 'he' || locale === 'ar';

  // Page-specific gradient colors
  const gradients = {
    home: ['#4F46E5', '#7C3AED'],      // Purple
    about: ['#0EA5E9', '#06B6D4'],      // Blue/Cyan
    features: ['#8B5CF6', '#A855F7'],   // Violet
    pricing: ['#10B981', '#14B8A6'],    // Green/Teal
    blog: ['#F59E0B', '#EF4444'],       // Orange/Red
    contact: ['#6366F1', '#8B5CF6'],    // Indigo/Violet
    faq: ['#14B8A6', '#06B6D4'],        // Teal/Cyan
    default: ['#4F46E5', '#7C3AED']     // Purple
  };

  const colors = gradients[page] || gradients.default;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill="none"
            style={{ marginRight: '16px' }}
          >
            <circle cx="50" cy="50" r="45" fill="white" fillOpacity="0.2" />
            <text
              x="50"
              y="65"
              fontSize="40"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              👻
            </text>
          </svg>
          <span
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Ghost Post
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            direction: isRtl ? 'rtl' : 'ltr',
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? 48 : 56,
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
              margin: 0,
              marginBottom: '24px',
              maxWidth: '900px',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              style={{
                fontSize: 24,
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {description.length > 100 
                ? description.substring(0, 100) + '...' 
                : description}
            </p>
          )}
        </div>

        {/* Bottom decoration */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            ghostpost.co.il
          </span>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
