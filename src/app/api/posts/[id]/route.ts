import { NextResponse, NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { rows } = await sql`
      SELECT id, title, content, name, created_at
      FROM board
      WHERE id = ${params.id}
      ORDER BY created_at DESC;
    `;
    return NextResponse.json(rows[0], { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    // 조회수 증가 쿼리 실행
    await sql`
      UPDATE board
      SET views = views + 1
      WHERE id = ${id};
    `;

    return NextResponse.json({ message: `Post ID ${id} view count has been updated` }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to update view count' }, { status: 500 });
  }
}