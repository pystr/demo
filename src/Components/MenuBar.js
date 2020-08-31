import React, { Component } from 'react';

class MenuBar extends Component {
    render() {
        return (
            
        <aside>
        <div id="sidebar" class="nav-collapse ">
    
          <ul class="sidebar-menu">
            <li class="active">
              <a class="" href="Dashboard">
                            <i class="icon_house_alt"></i>
                            <span>Panel Ekranı</span>
                        </a>
            </li>
        
            <li class="sub-menu">
              <a href="javascript:;" class="">
                            <i class="icon_documents_alt"></i>
                            <span>İşlemler</span>
                            <span class="menu-arrow arrow_carrot-right"></span>
                        </a>
              <ul class="sub">
                <li><a class="" href="Urunler">Ürünler</a></li>
                <li>
                    {
                        this.props.isAuthenticated?
                        <a class="" href="login.html"><span>Hoş Geldiniz!</span></a>:

                        <a class="" href="Login"><span>Login Ekranı</span></a>
                    }
                    </li>
                <li><a class="" href="Sepet"><span>Sepet</span></a></li>
                
              </ul>
            </li>
  
          </ul>
         
        </div>
      </aside>
     
  
        );
    }
}

export default MenuBar;