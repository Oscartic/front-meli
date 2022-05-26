import { SpinnerRoundFilled } from 'spinners-react';

const Spinner = () => {
    return (
        <div className='spinner'>
            <SpinnerRoundFilled size={60} thickness={100} speed={100} color="rgba(93, 172, 57, 1)" />
        </div>   
    );
}
 
export default Spinner;
