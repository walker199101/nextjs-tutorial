// import variables from './../variables.module.scss'
import AddButton from './addButton';
import { PostsTable } from './postsTable';

export default function Dashboard() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '30px' }}>
      <PostsTable />
      <AddButton />
    </div>
  );
}