'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import pageStyles from './write.module.scss';

export default function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const response = await fetch('/api/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
      });
      if (response.ok) {
        // 폼 제출 후 입력 값 초기화
        setTitle('');
        setContent('');
        setAuthor('');
        router.push('/dashboard');
      }
    };
  
    return (
      <div className={pageStyles.container}>
        <h1 style={{ textAlign:"center"}}>새로 글쓰기</h1>
        <form className={pageStyles.form} onSubmit={handleSubmit} >
          {/* 제목 입력 */}
          <div className={pageStyles.field}>
            <label htmlFor="title">제목:</label>
            <input
              type="text"
              id="title"
              value={title}
              className={pageStyles.input}
              onChange={(e) => setTitle(e.target.value)}
              required
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
              required
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
              required
            />
          </div>
  
          {/* 제출 버튼 */}
          <button type="submit" className={pageStyles.button}>글쓰기</button>
        </form>
      </div>
    );
  }