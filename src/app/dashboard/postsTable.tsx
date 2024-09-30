"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { sql } from "@vercel/postgres";
import tableStyles from './../table.module.scss'

type Post = {
  id: number;
  title: string;
  name: string;
  created_at: Date;
  views: number;
};

export function PostsTable() {
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();

    useEffect(() => {
      fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
    }, []);

    return (
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td onClick={() => { router.push(`/dashboard/${post.id}`); }}>{post.title}</td>
              <td>{post.name}</td>
              <td>{post.created_at.toLocaleString()}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }