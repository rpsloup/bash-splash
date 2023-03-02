import DefaultLayout from '../layouts/DefaultLayout';
import DrawingGrid from '../components/elements/DrawingGrid';

const HomePage = (): JSX.Element => (
  <DefaultLayout>
    <h1>Home</h1>
    <DrawingGrid />
  </DefaultLayout>
);

export default HomePage;
