import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * POST /api/revalidate
 * Revalidate cache tags when CMS content changes
 * 
 * Request body:
 * {
 *   "secret": "REVALIDATE_SECRET",
 *   "tags": ["content-he", "seo-he-home"]
 * }
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { secret, tags } = body;

    // Validate secret
    const expectedSecret = process.env.REVALIDATE_SECRET;
    if (!expectedSecret || secret !== expectedSecret) {
      return NextResponse.json(
        { error: 'Invalid secret' },
        { status: 401 }
      );
    }

    // Validate tags
    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return NextResponse.json(
        { error: 'Tags array is required' },
        { status: 400 }
      );
    }

    // Revalidate each tag
    const revalidated = [];
    for (const tag of tags) {
      try {
        revalidateTag(tag);
        revalidated.push(tag);
      } catch (err) {
        console.error(`Failed to revalidate tag ${tag}:`, err);
      }
    }

    console.log(`[Revalidate] Revalidated ${revalidated.length} tags:`, revalidated);

    return NextResponse.json({
      revalidated: true,
      tags: revalidated,
      now: Date.now()
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    );
  }
}
