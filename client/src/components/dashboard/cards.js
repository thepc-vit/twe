import React from 'react'

function Cards() {
    return (
        <div className="card-columns">
            <div className="card bg-success text-white p-3">
                <h5 className="card-title">Ready to Publish Articles</h5>
                <small>This includes all pieces that have not been used in any previous edition of TWE. These may include reviews, satire, editorial.</small>
                <blockquote className="blockquote mb-0  text-center">
                    <p className="h1">6</p>
                    <footer className="blockquote-footer text-white">
                        <small>
                            As of <b>June 7th 2020 3:30 PM</b>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Edition 13 statistics</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-9">
                                    <h5 className="card-text">Views</h5>
                                </div>
                                <div className="col-md-3">
                                    <h5 className="card-text">1249</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-9">
                                    <h5 className="card-text">Articles</h5>
                                </div>
                                <div className="col-md-3">
                                    <h5 className="card-text">13</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-9 col-sm-9">
                                    <h5 className="card-text">Shares</h5>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <h5 className="card-text">1824</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card bg-primary text-white p-3">
                <h5 className="card-title">Current Edition</h5>
                <blockquote className="blockquote mb-0  text-center">
                    <p className="h1">14</p>
                    <footer className="blockquote-footer text-white">
                        <small>
                            To be published on <b>June 7th 2020</b>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div className="card text-center bg-warning">
                <div className="card-body">
                    <h5 className="card-title">Welcome</h5>
                    <p className="card-text">This is the TWE dashboard. Any new updates will be reported on this main page. The primary purpose of this page is to give a summary of all quantitative data of TWE.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card p-3 text-right bg-white">
                <blockquote className="blockquote mb-0">
                    <p>If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.</p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            Oprah Winfrey
                        </small>
                    </footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Cards;