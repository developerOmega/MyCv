import MainLayout from '../Layouts/MainLayout';
import NavUser from '../components/NavUser';
import { getReq } from '../config/axios';
import { url, id } from '../config/config';

const Contacts = ({user}) => {
  return (
    <NavUser user={user}>
      <section>
        <h1> Contactos </h1>
      </section>
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

Contacts.Layout = MainLayout;

export default Contacts;