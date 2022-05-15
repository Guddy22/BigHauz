import Nav from './Components/Nav';
import Carousel from './Components/Carousel';
import ServicesList from './Components/ServicesList';
import SectionHeader from './Components/SectionHeader';

function App() {
  return (
    <div>
      <Nav/>
      <Carousel />
      <SectionHeader title="Our Services"/>
      <ServicesList/>
    </div>
 );
}

export default App;
