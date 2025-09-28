import UnicornLogo from '../assets/UnicornLogo.png';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
    const navigate = useNavigate();
    const handleFunc = () => {
        navigate('/home');

    }
    return(
        <div className='flex h-screen items-center justify-center  ' style={{backgroundColor:'#191919'}} onClick={handleFunc}>
       
            <img src={UnicornLogo} className='w-[250px] sm:w-[280px] md:w-[300px]' />
        </div>
    )
}
export default WelcomePage;