import React,{useState} from 'react';
import loginOne from '../assets/login_one.png';
import loginTwo from '../assets/login_two.png';
import { Link, useNavigate } from 'react-router-dom';
import requestInstance from '../utils/axios';
import FailureModal from './components/FailureModal';
import LoadingScreen from './components/LoadingScreen';

const SignupScreen = () => {


    const [state,setState] = useState({
        email:'',
        password:'',
      });
     const navigate = useNavigate();
      const register = async () => {

        try{
          window.loading_modal.showModal();

         await requestInstance.post('/auth/register', {
          email:state.email,password:state.password});
          window.loading_modal.close();
          navigate('/');

          
          }
          catch(err){
            window.loading_modal.close();
            console.log(err)
          }

      }
    
      const handleChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
      }

    return(
    <div className="hero min-h-screen bg-white">
        <LoadingScreen/>
        <FailureModal title="Signup Failed" message="You have failed to Signup"/>
    <div className="hero-content flex-col z-20 lg:flex-row-reverse">
      
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <div className="text-center ">
        <h1 className="text-5xl font-bold">Signup</h1>
        <p className="py-6">This page has a signup vulnerability. <br/>It's your duty to find where it is.</p>
      </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' onClick={handleChange} type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' onChange={handleChange} type="text" placeholder="password" className="input input-bordered" />
            
          </div>
          <div className="form-control mt-6">
            <button onClick={()=>register()}  className="btn btn-primary">Signup</button>
            <div className='mt-2 text-center'>
              <p>Already have an Account? <span className='text-blue-600'><Link to="/">Login</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='absolute bottom-0 right-0 '>
     
     <img
      src={loginOne}
      alt='loginOne'
     className='h-[200px] max-sm:h-[150px]' />

    </div>
    <div className='absolute bottom-0 left-0'>
      <img
      src={loginTwo}
      alt='loginTwo'
     className='h-[200px] max-sm:h-[150px]' />
    
    </div>
  </div>
    )
}

export default SignupScreen;