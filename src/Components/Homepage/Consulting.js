import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Consulting=()=>{
    return(
        <>
                <section id="consult">
 


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
      <Tab>Branding & Strategy</Tab>
      <Tab>UI/UX</Tab>
      <Tab>3d & motion</Tab>
    </TabList>

    <TabPanel>
      <div className='data-tabs'>
      <p>&#123; 01 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Designing</span></p>
      </div>
      <div className='data-tabs'>
      <p>&#123; 02 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App Designing</span></p>
      </div>
      <div className='data-tabs'>
      <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UI/UX design</span></p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className='data-tabs'>
      <p>&#123; 01 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Designing</span></p>
      </div>
      <div className='data-tabs'>
      <p>&#123; 02 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UI/UX design</span></p>
      </div>
      <div className='data-tabs'>
      <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App Designing</span></p>
      </div>
  
    </TabPanel>
    <TabPanel>
    <div className='data-tabs'>
      <p>&#123; 01 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App Designing</span></p>
      </div>
    <div className='data-tabs'>
      <p>&#123; 02 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Designing</span></p>
      </div>
    
      <div className='data-tabs'>
      <p>&#123; 03 &#125;<span className='main-service'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UI/UX design</span></p>
      </div>
    </TabPanel>
  </Tabs>
        </div>
    </div>
</div>


        </section>
        </>
    )
}

export default Consulting;