import React from 'react'
import { MdMailOutline } from "react-icons/md";

function Inmail() {
  return (
    <div>
      <div className="mb-3 mailBg" id='inMail'>
  <div className="row g-0">
    <div className="col-md-7">
      <img src="https://st4.depositphotos.com/1049680/21146/i/450/depositphotos_211462106-stock-photo-young-african-american-businessman-using.jpg" className="mailImg mainImg" alt="..." />
    </div>
    <div className="col-md-5 mailCon">
    <div className="body p-5 mt-3">
          <p  className='textIcon' ><MdMailOutline className='icon' /> Monthly InMail</p>
        <h2 className="card-title">Make new connections</h2>
        <p className="card-text">Reach out to hiring managers and recruiters via Inmail to indicate interest in an open role. Inmail is 2.6x more effective than emails alone.</p>
        <button type="button" className="btn btn-outline-primary">Upgrade free for 1 month</button>
        <p className="card-text mt-5"><small className="">*Free trial eligibility determined on log-in.</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Inmail