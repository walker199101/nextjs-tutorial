import { NextResponse, NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';

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