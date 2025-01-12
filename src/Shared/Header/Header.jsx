import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" srcset="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;