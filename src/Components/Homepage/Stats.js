const Stats = ()=>{
    return(
        <>
        <section id="stats">
            <div className="container analytics">
                <div className="row">
                    <div className="col-lg-6 lime">
                      <div className="upper-data">
                        <h2>Projects Success Rate</h2>
                        <img src={"images/right-arrow.png"}/>
                      </div>
                      <div className="number-data">
                        <h2>96%</h2>
                      </div>
                    </div>
                    <div className="col-lg-3 white">
                    <div className="upper-data">
                        <h2>Followers</h2>
                        <img src={"images/right-arrow.png"}/>
                      </div>
                      <div className="number-data">
                        <h2>50.3K</h2>
                      </div>
                    </div>
                    <div className="col-lg-3 pink">
                   
                      <div className="number-data">
                   
                      <h2>7.6M</h2>
                      </div>
                      <div className="upper-data top-border">
                        
                      <h2>Design Views</h2>
                      <img src={"images/right-arrow.png"}/>
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 simple-white">
                      <div className="upper-datas">
                     <h3>5 +</h3>
                     <img src={"images/right-arrow.png"}/>
                     <h4>Years Expertise</h4>
                      </div>
                    </div>
                    <div className="col-lg-3 white-logo">
                    <div className="stats-logo">
                        <img src={"images/Logo.png"}/>
                        <p>namaskara@somebigname.com</p>
                     </div>
                    </div>
                    <div className="col-lg-6 blue">
                    <div className="upper">
                        <h3>Designs</h3>
                        <h4>375+</h4>
                      </div>
                      <p>/</p>
                      <div className="number-datas">
                        <h2>Generated <br/> 4.8k Plus Leads</h2>
                      </div>
                    </div>
                </div>
            </div>


   
        </section>
        </>
    )
}

export default Stats;