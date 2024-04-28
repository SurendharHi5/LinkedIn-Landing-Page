import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";

function Applicant() {
  return (
    <div>
      <div className=" mb-3 appBg" id='applicant'>
  <div className="row g-0">
    <div className="col-md-7">
      <img src="https://media.licdn.com/dms/image/D4D08AQGqJZHpAZXYaA/croft-frontend-shrinkToFit1024/0/1696290657275?e=2147483647&v=beta&t=8hc5ftDxlsw9gOyWYfUUdYMwIatC1J5yuQ3jzKwctrU" className="img-fluid rounded-start mainImg" alt="..." />
    </div>
    <div className="col-md-5 appCon">
    <div className="body p-5 mt-3">
          <p  className='textIcon' ><BsGraphUpArrow className='icon' /> Applicant Insights</p>
        <h2 className="card-title">Find a job that fits</h2>
        <p className="card-text">Get directed to open roles where you'd be a fit based on your skills, past experience, salary requirements, and education.</p>
        <button type="button" className="btn btn-outline-primary">Upgrade free for 1 month</button>
        <p className="card-text mt-5"><small className="">*Free trial eligibility determined on log-in.</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Applicant