import logo from '../assets/GloboLogo.png';
import {logo as logoClass, subtitle} from './Banner.module.css';

const Banner = ({children}) => {
  return (
    <header className="row mb-4">
      <div className='col-5'><img src={logo} className={logoClass} alt="logo" /></div>
      <div className={`col-7 ${subtitle}`}>{children}</div>
    </header>
   );
}

export default Banner;