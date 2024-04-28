import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"
import { FaLinkedin } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdMailOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import Learning from './Learning';
import Inmail from './Inmail';
import Profile from './Profile';
import Applicant from './Applicant';
import Footer from './Footer';


function Home() {
  return (
    <BrowserRouter>
    {/* <div className='row'>
      <div className='col'>
        <h3>Linked in PREMIUM</h3>
      </div>
      <div className='col'>
          <button type="button" className="btn btn-outline-primary">Start my free trial</button>
      </div>
    </div>
    <hr /> */}

    <nav className="navTop navbar navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <h4 className='navText'><span className='navIc' style={{color:'blue'}}>Linked<FaLinkedin /></span> PREMIUM</h4>
    <button type="button" className="navBtn btn btn-outline-primary">Start my free trial</button>
  </div>
</nav>

<div>
  <div className=" text-bg-dark homeCard">
    <img src="https://img.freepik.com/premium-photo/beautiful-casual-woman-using-laptop_109710-1071.jpg?w=740" className=" homeImg" alt="..." />
    <div className="card-img-overlay imgCont">
      <div className='row align-items-center'>
      <div className="col-md-6 imgText text-center">
                  <div>
                    <h2 className="mb-3 text-white">Discover how Premium can help you</h2>
                    <button type="button" className="btn btn-primary">Upgrade free for 1 month</button>
                  </div>
                  <div className='mt-5'>
                    <p className="mb-4 text-white">*Free trial eligibility determined on log-in.</p>
                    <p className="mb-4 text-white" style={{color:'blue'}}>Additional terms may apply.</p>
                  </div>
              </div>
      </div>
    </div>
    
  </div>
  <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#ffffff" fillOpacity="1" d="M0,96L720,224L1440,64L1440,320L720,320L0,320Z"></path>
  </svg>
</div>
<br />
<br />
<div>
  {/* <ul className="navCen nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Premium Career</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Premium Business</a>
    </li>
    
  </ul> */}
  
  <ul className="navCen nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Premium Career</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Premium Business</button>
  </li>
  
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <h2 className='text-center mt-5'>
      Grow professionally with Premium Career
    </h2>
    <br/>
    <div>
      
        <div className="row text-center">
            
              <div className="col">
                <Link to="#learning" className='homeText'>
                    <CiYoutube className='homeIcon' />
                    <p>On-Demand Learning</p>
                </Link>
              </div>
           
              <div className="col homeText">
                <Link to="#inMail" className='homeText'>
                  <MdMailOutline className='homeIcon' />
                  <p>Monthly InMail</p>
                </Link>
              </div>
            
              <div className="col homeText">
                <Link to="#profile" className='homeText'>
                  <CgProfile className='homeIcon' />
                  <p>Who's Viewed Your Profile</p>
                </Link>
              </div>
          
              <div className="col homeText">
                <Link to="#applicant" className='homeText'>
                  <BsGraphUpArrow className='homeIcon' />
                  <p>Applicant Insights</p>
                </Link>
              </div>
          </div>
      
        {/* <div className="row text-center homeText">
          <div className="col">
              <CiYoutube className='homeIcon' />
              <p>On-Demand Learning</p>
          </div>
          <div className="col">
            <MdMailOutline className='homeIcon' />
            <p>Monthly InMail</p>
          </div>
          <div className="col">
            <CgProfile className='homeIcon' />
            <p>Who's Viewed Your Profile</p>
          </div>
          <div className="col">
            <BsGraphUpArrow className='homeIcon' />
            <p>Applicant Insights</p>
          </div>
        </div> */}
    </div>

    <br />
<div>
  <Learning />
  <Inmail />
  <Profile />
  <Applicant />
  <Footer />
</div>

  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <h2 className='text-center'>
      Premium Business
    </h2>
  </div>
  
</div>
</div>

<div className='mt-3'>
    <ul className="nav justify-content-center">
    <li className="nav-item">
      <p className="nav-link" style={{color:'black'}}><span style={{color:'blue'}}>Linked<FaLinkedin /></span> © LinkedIn Corporation 2020</p>
    </li>
  <div className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active liText" aria-current="page" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link liText" href="#">Cookie Policy</a>
  </li>
  <li className="nav-item">
    <a className="nav-link liText" href="#">Privacy Policy</a>
  </li>
  <li className="nav-item">
    <a className="nav-link liText" href="#">User Agreement</a>
  </li>
  </div>
  
</ul>
</div>
	</BrowserRouter>
  )
}

export default Home