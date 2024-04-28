import React from 'react'
import { CgProfile } from "react-icons/cg";

function Profile() {
  return (
    <div>
       <div className="mb-3 proBg" id='profile'>
  <div className="row g-0">
    <div className="col-md-5 proCon">
    <div className="body p-5 mt-3">
          <p  className='textIcon' ><CgProfile className='icon' /> Who's Viewed Your Profile</p>
        <h2 className="card-title">Your profile is gaining traction</h2>
        <p className="card-text">Find out whether a hiring manager or recruiter has viewed your profile.</p>
        <button type="button" className="btn btn-outline-primary">Upgrade free for 1 month</button>
        <p className="card-text mt-5"><small className="">*Free trial eligibility determined on log-in.</small></p>
      </div>
    </div>
    <div className="col-md-7 text-end">
      <img src="https://img.freepik.com/free-photo/beautiful-smiling-girl-using-mobile-phone-looking-smartphone-pleased_1258-19053.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707264000&semt=ais" className="img-fluid rounded-start mainImg" alt="..." />
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile