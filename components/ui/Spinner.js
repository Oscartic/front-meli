import { SpinnerRoundOutlined } from 'spinners-react';

const Spinner = () => {
    return (
        <div className='spinner'>
            <SpinnerRoundOutlined size={50} thickness={1} speed={120} color="rgba(255,255,255,1)" />
        </div>   
    );
}
 
export default Spinner;
