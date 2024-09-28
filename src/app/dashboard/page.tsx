// import variables from './../variables.module.scss'
import tableStyles from './../table.module.scss'

import { sql } from "@vercel/postgres";
import AddButton from './addButton';

export async function BOARD(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from BOARD`;
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
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.user}</td>
            <td>{row.created_at.toLocaleString()}</td>
            <td>{row.views}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Dashboard() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '30px' }}>
      <BOARD />
      <AddButton />
    </div>
  );
}