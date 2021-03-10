import React from "react"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <div className="header is-white">
      <div className="inner">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog/" className="is-active">Blog</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href="/react-admin-panel/"><span className="react">React</span>Admin Panel</a></li>
            <li><a href="/react-book-store/"><span className="react">React</span>Book Store</a></li>
            <li><a href="/react-budget-list/"><span className="react">React</span>Budget List</a></li>
            <li><a href="/react-github-find/"><span className="react">React</span>GitHub Find</a></li>
            <li><a href="/sass-design-system/"><span className="sass">Sass</span>Design System</a></li>
            <li className="offcanvas-toggle">
              <svg viewBox="0 0 100 100"><path className="line l1" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"/><path className="line l2" d="m 70,50 h -40"/><path className="line l3" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"/></svg>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="offcanvas">
      <div className="inner">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog/" className="is-active">Blog</a></li>
            <li><a href="/react-admin-panel/"><span className="react">React</span> Admin Panel</a></li>
            <li><a href="/react-book-store/"><span className="react">React</span> Book Store</a></li>
            <li><a href="/react-budget-list/"><span className="react">React</span> Budget List</a></li>
            <li><a href="/react-github-find/"><span className="react">React</span> GitHub Find</a></li>
            <li><a href="/sass-design-system/"><span className="sass">Sass</span> Design System</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="container">
      <h1 className="text-center my-5">Blog</h1>
      <div className="panel is-high">
        {children}
      </div>
    </div>
  </>
)

export default Layout
