'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import pageStyles from './edit.module.scss';

export default function Edit({ params }: { params: { id: string } }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const router = useRouter();
    console.log(params);

    useEffect(() => {
        fetch(`/api/posts/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
            setTitle(data.title);
            setContent(data.content);
            setAuthor(data.name);
        }).catch((error) => {
            console.error('Error fetching posts:', error);
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // 수정된 데이터를 서버로 전송
      const response = await fetch(`/api/posts/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
      });
  
      if (response.ok) {
        setTitle('');
        setContent('');
        setAuthor('');
        router.push('/dashboard'); // 수정 후 대시보드로 이동
      } else {
        console.error('Failed to update post');
      }
    };

    return (
      <div className={pageStyles.container}>
        <h1 style={{ textAlign:"center"}}>글 보기</h1>
        <form className={pageStyles.form} >
          {/* 제목 입력 */}
          <div className={pageStyles.field}>
            <label htmlFor="title">제목:</label>
            <input
              type="text"
              id="title"
              value={title}
              className={pageStyles.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* 글쓴이 입력 */}
          <div className={pageStyles.field}>
            <label htmlFor="author">글쓴이:</label>
            <input
              type="text"
              id="author"
              value={author}
              className={pageStyles.input}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
  
          {/* 내용 입력 */}
          <div className={pageStyles.field}>
            <label htmlFor="content">내용:</label>
            <textarea
              id="content"
              value={content}
              className={pageStyles.textarea}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
  
          {/* 버튼 그룹 */}
          <div className={pageStyles.button_group} >
            <button className={pageStyles.button} onClick={(e) => { e.preventDefault(); router.push('/dashboard')}}>취소</button>
            {/* 제출 버튼 */}
            <button type="submit" onClick={handleSubmit} className={pageStyles.button}>수정</button>
          </div>
        </form>
      </div>
    );
  }