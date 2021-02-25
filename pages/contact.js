import MainLayout from '../Layouts/MainLayout';
import NavUser from '../components/NavUser';
import TextFlex from '../components/flex/TextFlex';
import {Title, Link} from '../components/tags';
import { In, Fb, Gh, Sh, Gm } from '../components/icons';
import { getReq } from '../config/axios';
import { url, id } from '../config/config';

const Contacts = ({user}) => {

  const padding = {
    padding: ".5rem 0"
  }

  return (
    <NavUser user={user}>
      
      <section className="main">

        <Title> Contactame </Title>

        <p className="desc"> Si deseas contactarme, estas son mis redes </p>

        <div style={padding}>  
          <TextFlex>
            <In fill="#0E91CA" />
            <p> /daniel-mendoza-99b592172 </p>
          </TextFlex>
        </div>


        <div style={padding}>
          <TextFlex>
            <Fb fill="#0E91CA" />
            <p> DeveloperOmega </p>
          </TextFlex>
        </div>

        <div style={padding}>
          <TextFlex>
            <Gh fill="#0E91CA" />
            <p> developerOmega </p>
          </TextFlex>
        </div>


        <div style={padding}>
          <TextFlex>
            <Sh fill="#0E91CA" />
            <Link href=" http://developeromega.herokuapp.com">
              <p> http://developeromega.herokuapp.com/ </p>
            </Link>
          </TextFlex>
        </div>


        <div style={padding}>
          <TextFlex>
            <Gm fill="#0E91CA" />
            <p> theskip98@gmail.com </p>
          </TextFlex>
        </div>
       
         
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