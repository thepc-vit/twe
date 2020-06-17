import React from 'react'
import Item from './sidebar-item'

function Sidebar(props) {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>General</span>
                </h6>
                <ul className="nav flex-column">
                    <Item
                        name="Dashboard"
                        addClass="active"
                    />
                    <Item
                        name="Previous Editions"
                    />
                    <Item
                        name="Team members"
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Editorial</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="New Article"
                        redirect="newarticle"
                    />
                    <Item
                        name="Articles"
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Humans Of VIT</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="Addition"
                    />
                    <Item
                        name="Previous Interviews"
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Contributions</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="Your contribution"
                    />
                    <Item
                        name="Others contribution"
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Additional Options</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="Sign Out"
                        link="/welcome"
                    />
                </ul>
                <p className="sidebar-footer"> &copy; 2020 THEPC</p>
            </div>

        </nav>
    )
}

export default Sidebar
