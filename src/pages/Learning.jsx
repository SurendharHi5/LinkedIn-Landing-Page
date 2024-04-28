import React from 'react'
import { CiYoutube } from "react-icons/ci";

function Learning() {
  return (
    <div>
      <div className="mb-3 learnBg" id='learning'>
  <div className="row g-0">
    <div className="col-md-5">
      <div className="body p-5 mt-3">
          <p  className='textIcon' ><CiYoutube className='icon' /> On-Demand Learning</p>
        <h2 className="card-title">Sharpen your skills</h2>
        <p className="card-text">Access over 15,000 expert-led LinkedIn Learning courses to hone your skills or learn somthing new.</p>
        <button type="button" className="btn btn-outline-primary">Upgrade free for 1 month</button>
        <p className="card-text mt-5"><small className="">*Free trial eligibility determined on log-in.</small></p>
      </div>
    </div>
    <div className="col-md-7">
      <img src="https://media.licdn.com/dms/image/D4D12AQEI2ort_LplXg/article-cover_image-shrink_600_2000/0/1686047489640?e=2147483647&v=beta&t=krTSDjJ444aReWqVzhwKDe8lhDfHoDGMWiGjhjFfn-I" className="img-fluid rounded-start mainImg" alt="..." />
    </div>
  </div>
</div>
    </div>
  )
}

export default Learning