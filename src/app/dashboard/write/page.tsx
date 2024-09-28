'use client';

import { useState } from 'react';
// import { sql } from "@vercel/postgres";

  // 간단한 스타일 객체
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      marginTop: '20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    field: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      height: '150px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#0070f3',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

export default function Write() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // const formData = { title, content, author };
      const response = await fetch('/api/hello');
      console.log('response');
      console.log(response);
    //   const result = await response.json();
    //   console.log('result');
    //   console.log(result);
      
      // 폼 제출 후 입력 값 초기화
      setTitle('');
      setContent('');
      setAuthor('');
    };
  
    return (
      <div style={styles.container}>
        <h1 style={{ textAlign:"center"}}>새로 글쓰기</h1>
        <form onSubmit={handleSubmit} >
          {/* 제목 입력 */}
          <div style={styles.field}>
            <label htmlFor="title">제목:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
              required
            />
          </div>

            {/* 글쓴이 입력 */}
            <div style={styles.field}>
            <label htmlFor="author">글쓴이:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={styles.input}
              required
            />
          </div>
  
          {/* 내용 입력 */}
          <div style={styles.field}>
            <label htmlFor="content">내용:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={styles.textarea}
              required
            />
          </div>
  
          {/* 제출 버튼 */}
          <button type="submit" style={styles.button}>글쓰기</button>
        </form>
      </div>
    );
  }