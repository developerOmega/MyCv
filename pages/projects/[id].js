import { useRouter } from 'next/router';
import MainLayout from '../../Layouts/MainLayout';

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1> Project {id} </h1>
}

Project.Layout = MainLayout;

export default Project;