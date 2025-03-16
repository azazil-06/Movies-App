import React from 'react'

const Moviedetails = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Movie Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Category</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Director</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Release Date</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Actor Name</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Actress Name</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Moviedetails
