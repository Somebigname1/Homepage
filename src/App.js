import './App.css';
import CallToAction from './Components/Homepage/CallToAction';
import Consulting from './Components/Homepage/Consulting';
import Development from './Components/Homepage/Development';
import Footer from './Components/Homepage/Footer';
import HorizonatalSection from './Components/Homepage/HorizontalSection';

import Service from './Components/Homepage/Service';

import Started from './Components/Homepage/Started';
import WhatWeDo from './Components/Homepage/WhatWeDo';
import WhoWeAre from './Components/Homepage/WhoWeAre';


function App() {
  return (
    <>
 <WhoWeAre/>
<Started/>
<WhatWeDo/>
{/* <Stacking/> */}
<Service/>
<Consulting/>
<Development/>
<CallToAction/>
{/* <HorizonatalSection/> */}

<Footer/>
    </>
  );
}

export default App;
