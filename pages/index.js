import MainLayout from '../Layouts/MainLayout';
import NavUser from '../components/NavUser';
import { getReq } from '../config/axios';
import { url, id } from '../config/config';

const Home = ({user}) => {
  return (
    <div>
      <NavUser user={user} >
        <div> {user.description} </div>
      </NavUser>
    </div>
  )
}

export async function getStaticProps() {
  const link = `${url}/users/${id}`;
  const user = await getReq(link);

  return {
    props: { user }
  }
}

Home.Layout = MainLayout;

export default Home;


