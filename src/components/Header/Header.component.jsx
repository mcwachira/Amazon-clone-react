import React from 'react'
import { Link } from 'react-router-dom';
import './Header.styles.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { useStateValue } from '../../context/StateProvider';
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
const Header = () => {

    const [{ user, basket }] = useStateValue()

    const userEmail = user?.map((person) => (person?.email))
    const SignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            alert('error', error)
        })
    }
    return (
        <div className="header">

            <Link to='/'>
                <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>

            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>


            <div className="header__nav" >

                <Link to='/login'>
                    {/* <Link to={!user && '/login'}> */}
                    <div className="header__option" onClick={SignOut} >
                        <span className='header__optionLineOne'>

                            {user ? <p> Hello {userEmail} </p> : <p> Hello Guest</p>
                            }

                        </span>
                        <span className='header__optionLineTwo'>
                            {!user ? <p > Sign Out</p> : <p>Sign IN</p>}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>

                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>

                        Prime
                    </span>
                </div>

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div >
    )
}

export default Header