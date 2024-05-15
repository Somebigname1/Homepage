import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Development =()=>{
    return<>
    <section id="development">
 


 <div className="container our-services">
     <div className="row">
         <div className="col-lg-6">
             <div className='design-heads'>
             <h2>CONSULTING</h2>
             </div>
         </div>
 
         <div className="col-lg-6">
 <Tabs>
     <TabList>
       <Tab>Ecommerce</Tab>
       <Tab>Landing Pages</Tab>
       <Tab>Webflow</Tab>
       <Tab>Framer</Tab>
     </TabList>
 
     <TabPanel>
       <div className='data-tabs'>
       <p>&#123; 01 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portfolio Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 02 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corporate Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Apps</span></p>
       </div>
     </TabPanel>
     <TabPanel>
 
     <div className='data-tabs'>
       <p>&#123; 01 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portfolio Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 02 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corporate Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Apps</span></p>
       </div>
     </TabPanel>
     <TabPanel>
     <div className='data-tabs'>
       <p>&#123; 01 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portfolio Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 02 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corporate Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Apps</span></p>
       </div>
     </TabPanel>

     <TabPanel>
     <div className='data-tabs'>
       <p>&#123; 01 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portfolio Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 02 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corporate Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product Pages</span></p>
       </div>
       <div className='data-tabs'>
       <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Apps</span></p>
       </div>
     </TabPanel>
   </Tabs>
         </div>
     </div>
 </div>
 <img style={{width:"100%"}} src={'images/paper.png'}/>
 
         </section>
    </>
}


export default Development;