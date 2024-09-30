'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import pageStyles from './read.module.scss';
import DeleteButton from './deleteButton';

export default function Read({ params }: { params: { id: string } }) {
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
              readOnly
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
              readOnly
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
              readOnly
            />
          </div>
  
          {/* 버튼 그룹 */}
          <div className={pageStyles.button_group} >
            <button className={pageStyles.button} onClick={(e) => { e.preventDefault(); router.push('/dashboard')}}>취소</button>
            <div className={pageStyles.right_btn}>
                <button type="submit" className={pageStyles.button} onClick={(e) => { e.preventDefault(); router.push(`/dashboard/edit/${params.id}`)}}>수정</button>
                {/* <button type="submit" className={pageStyles.button}>삭제</button>*/}
                <DeleteButton params={{ id: params.id }}/>
            </div>
          </div>
        </form>
      </div>
    );
  }