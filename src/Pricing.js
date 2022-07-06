import React from 'react'

function Pricing(props) {
    console.log(props.data);
  return <>
       <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.a}</h5>
            <h6 className="card-price text-center">${props.data.b}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.isc?"":"text-muted"}><span className="fa-li"><i className={props.data.isc?"fas fa-check":"fas fa-times"}></i></span>{props.data.c}</li>
              <li className={props.data.isd?"":"text-muted"}><span className="fa-li"><i className={props.data.isd?"fas fa-check":"fas fa-times"}></i></span>{props.data.d}</li>
              <li className={props.data.ise?"":"text-muted"}><span className="fa-li"><i className={props.data.ise?"fas fa-check":"fas fa-times"}></i></span>{props.data.e}</li>
              <li className={props.data.isf?"":"text-muted"}><span className="fa-li"><i className={props.data.isf?"fas fa-check":"fas fa-times"}></i></span>{props.data.f}</li>
              <li className={props.data.isg?"":"text-muted"}><span className="fa-li"><i className={props.data.isg?"fas fa-check":"fas fa-times"}></i></span>{props.data.g}</li>
              <li className={props.data.ish?"":"text-muted"}><span className="fa-li"><i className={props.data.ish?"fas fa-check":"fas fa-times"}></i></span>{props.data.h}</li>
              <li className={props.data.isi?"":"text-muted"}><span className="fa-li"><i className={props.data.isi?"fas fa-check":"fas fa-times"}></i></span>{props.data.i}</li>
              <li className={props.data.isj?"":"text-muted"}><span className="fa-li"><i className={props.data.isj?"fas fa-check":"fas fa-times"}></i></span>{props.data.j}</li>
            </ul>
            <div className="d-grid">
              <a href="https://startbootstrap.com/snippets/pricing-table" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Pricing