import Logo from "./components/Logo";
import Action from "./components/Action";
import Category from "./components/Category";

import searchIcon from '../../imgs/search-icon.svg';
import cartIcon from '../../imgs/cart-icon.svg';
import mobileMenu from '../../imgs/mobile-menu.svg';

const Header = () => {

    const openCartPreview =()=>{
        const cartPreview = document.getElementById("cart-preview");
        const layer = document.getElementById('layer');
        cartPreview.style.display = 'flex';
        layer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    return(
        <header>
            <div className="container header__container mobile-container">
                <img  className={"mobile-menu"} src={mobileMenu} alt="mobile-menu"/>
                <Logo/>
                <nav className={"desktop-menu"}>
                    <Category className = "category"
                              value ={'Vikings'}
                    />
                    <Category className = "category"
                              value ={'Ancient Egypt'}
                    />
                    <Category className = "category"
                              value ={'Celtics'}
                    />
                    <Category className = "category sale"
                              value ={'Sale'}
                    />
                </nav>
                <div className="actions">
                    <Action
                        src = {searchIcon}
                        alt = 'search-icon'
                    />
                    <Action
                        handleAction = {openCartPreview}
                        src = {cartIcon}
                        alt = 'cart-icon'
                    />
                </div>
            </div>
        </header>
    )
}

export default Header