import UnicornLogo from '../assets/UnicornLogo.png';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
    const navigate = useNavigate();
    const handleFunc = () => {
        navigate('/home');

    }
    return(
        <div className='flex h-screen items-center justify-center px-4' style={{backgroundColor:'#191919'}} onClick={handleFunc}>
       
            <img src={UnicornLogo} alt="Unicorn Tech Logo" className='w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] h-auto object-contain cursor-pointer' />
        </div>
    )
}
export default WelcomePage;