import MainLayout from '../Layouts/MainLayout';
import NavUser from '../components/NavUser';
import { getReq } from '../config/axios';
import { url, id } from '../config/config';
import Icon from '../components/tags/Icon';

const Home = ({user}) => {
  return (
    <NavUser user={user} >
      <div className="main">
        <div className="section">
          {user.description} 
        </div>
      </div>
    </NavUser>
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


