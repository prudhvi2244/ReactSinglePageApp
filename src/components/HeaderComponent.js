import React from 'react'
import { BrowserRouter as Router ,Switch , Route ,Link } from 'react-router-dom'
import AboutComponent from './AboutComponent'
import ContactComponent from './ContactComponent'
import HomeComponent from './HomeComponent'
import ServicesComponent from './ServicesComponent'
function HeaderComponent() {
    return (
      <Router>
       
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CITIZEN CARD SYSTEM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    <Switch>
          <Route path='/' exact component={HomeComponent} />
          <Route path='/about'  exact component={AboutComponent} />
          <Route path='/services' exact component={ServicesComponent} />
          <Route path='/contact' exact component={ContactComponent} />
        </Switch>
        </div>
        </Router>
    )
}

export default HeaderComponent
