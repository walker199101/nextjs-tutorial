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
  const { title, content, author } = await request.json();

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    // 기존 데이터 업데이트
    await sql`
      UPDATE board
      SET title = ${title}, content = ${content}, name = ${author}
      WHERE id = ${id};
    `;

    return NextResponse.json({ message: `Post with ID ${id} has been updated` });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}