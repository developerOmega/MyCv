import MainLayout from '../Layouts/MainLayout';
import NavUser from '../components/NavUser';
import TextFlex from '../components/flex/TextFlex';
import { getReq } from '../config/axios';
import {Icon, Title, Link} from '../components/tags';
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
            <Icon fill="#0E91CA" icon="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />

            <p> /daniel-mendoza-99b592172 </p>
          </TextFlex>
        </div>


        <div style={padding}>
          <TextFlex>
            <Icon fill="#0E91CA" icon="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />

            <p> DeveloperOmega </p>
          </TextFlex>
        </div>

        <div style={padding}>
          <TextFlex>
            <Icon fill="#0E91CA" icon="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />

            <p> developerOmega </p>
          </TextFlex>
        </div>


        <div style={padding}>
          <TextFlex>
            <Icon fill="#0E91CA" icon="M 7 4 C 5.35 4 4 5.35 4 7 L 4 43 C 4 44.65 5.35 46 7 46 L 43 46 C 44.65 46 46 44.65 46 43 L 46 7 C 46 5.35 44.65 4 43 4 L 7 4 z M 22.5 13 C 27.74 13 32 17.26 32 22.5 C 32 24.76 31.210625 26.840703 29.890625 28.470703 L 37.710938 36.289062 L 36.289062 37.710938 L 28.470703 29.890625 C 26.840703 31.210625 24.76 32 22.5 32 C 17.26 32 13 27.74 13 22.5 C 13 17.26 17.26 13 22.5 13 z M 22.5 15 A 7.5 7.5 0 0 0 15 22.5 A 7.5 7.5 0 0 0 22.5 30 A 7.5 7.5 0 0 0 30 22.5 A 7.5 7.5 0 0 0 22.5 15 z" />

            <Link href=" http://developeromega.herokuapp.com">
              <p> http://developeromega.herokuapp.com/ </p>
            </Link>
          </TextFlex>
        </div>


        <div style={padding}>
          <TextFlex>
            <Icon fill="#0E91CA" icon="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z" />

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