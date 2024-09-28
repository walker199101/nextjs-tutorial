"use client";
import buttonStyles from './../button.module.scss'

export default function AddButton() {
  return <div className={buttonStyles.button}>
        <button onClick={() => alert("클릭됨!")}>글쓰기</button>
    </div>;
}