import './App.css';
import CallToAction from './Components/Homepage/CallToAction';
import Consulting from './Components/Homepage/Consulting';
import Development from './Components/Homepage/Development';
import Footer from './Components/Homepage/Footer';
import HamburgerMenu from './Components/Homepage/Hamburger';
import HorizonatalSection from './Components/Homepage/HorizontalSection';
import MainBanner from './Components/Homepage/MainBanner';

import Service from './Components/Homepage/Service';

import Started from './Components/Homepage/Started';
import Stats from './Components/Homepage/Stats';

import WhatWeDo from './Components/Homepage/WhatWeDo';
import WhoWeAre from './Components/Homepage/WhoWeAre';


function App() {
  return (
    <>
 <HamburgerMenu/>
    <MainBanner/>
  
 <WhoWeAre/>
 <Started/>
 <WhatWeDo/>
 <Service/>

<Consulting/>
<Development/>
 <HorizonatalSection/>
 







<Stats/>
<CallToAction/>


<Footer/>
    </>
  );
}

export default App;
