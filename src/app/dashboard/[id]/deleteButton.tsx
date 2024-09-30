"use client";
import pageStyles from './read.module.scss';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch(`/api/posts/delete/${params.id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      const result = await response.json();
      console.log(result.message); // Post with ID 5 has been deleted
      router.push('/dashboard');
    } else {
      console.error('Failed to delete post:', response.statusText);
    }
  };

  return <button className={pageStyles.button} onClick={handleSubmit}>삭제</button>;
}