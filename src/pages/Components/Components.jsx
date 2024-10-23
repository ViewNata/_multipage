import { useState } from 'react'
import Counter from '../../components/Counter/Counter';
import Timer from '../../components/Timer/Timer'
import Add from '../../components/Add/Add';
import Temperatures from '../../components/Temperatures/Temperatures';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './Components.css'
// import Add from './components/Add/Add';

function Components() {
    const [count, setCount] = useState(0)


  // render
return (
    <>
    <div className='main-container' style={{ boxShadow: '0 0 0.25rem grey'}}>
        <h1>REACT COMPONENTS</h1>
        {/* <h1 className='title'>Hello world</h1> */}
        {/* <Counter /> */}
        {/* <Counter name={''} /> */}
        <section className='components-top' >
        <div className='components-top-1'>
            <Counter  name={'Counter'} value={20}/> 
            <Timer />
        </div>
        
        <div className='components-bottom'>
            <Add v1={10} v2={20} />
        </div>
        </section>
        <Temperatures  initCelsius={0} initFahrenheit={0} initKelvin={0} />

        
        
        
    </div>



    </>
    )
}

export default Components
