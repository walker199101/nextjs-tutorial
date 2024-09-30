import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request) {
    try {
        // 요청값에서 JSON 데이터 파싱
        const { title, content, author } = await request.json();
    
        // 유효성 검사
        if (!title || !content || !author) {
          return NextResponse.json(
            { error: 'title and content and author are required' },
            { status: 400 }
          );
        }
    
        // SQL 쿼리를 통해 데이터 삽입
        const result = await sql`
          INSERT INTO board (content, name, title, views)
          VALUES (${content}, ${author}, ${title}, 0);
        `;
    
        // 삽입된 데이터 반환
        return NextResponse.json({ message: 'User added successfully', user: result.rows[0] }, { status: 201 });
      } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
      }
}
