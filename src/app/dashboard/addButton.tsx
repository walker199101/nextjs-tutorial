"use client";
import buttonStyles from './../button.module.scss'
import { useRouter } from 'next/navigation';

export default function AddButton() {
  const router = useRouter();
  return <div className={buttonStyles.button}>
    <button onClick={() => { router.push('/write') }}>글쓰기</button>
  </div>;
}