import React from 'react';
import LandingFooter from './LandingFooter';
import LandingNav from './LandingNav';

const Wrapper=(props)=> {
   return (
        <>
          <div className="container-fluid">
                   <div className="row">
                       <LandingNav/>
                       <LandingFooter/>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                {props.children}
                        </main>
                   </div>
            </div>
        </>
        )
}
export default Wrapper;