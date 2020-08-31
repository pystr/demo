import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <header class="header dark-bg">
            <div class="toggle-nav">
              <div class="icon-reorder tooltips" data-original-title="Menü Aç Kapat!" data-placement="bottom"><i class="icon_menu"></i></div>
            </div>
      
            <a href="/Dashboard" class="logo">Demo <span class="lite">Panel</span></a> 
      
            <div class="nav search-row" id="top_menu">
              <ul class="nav top-menu">
                <li>
                  <form class="navbar-form">
                    <input class="form-control" placeholder="Arama Yap" type="text"/>
                  </form>
                </li>
              </ul>
            </div>
      
            
          </header>
     
        );
    }
}

export default TopBar;