import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';


function Home() {
    const [typeEffect] = useTypewriter({
        words: [
          'Find delicious meals made just for you.',
          'Enjoy fresh, tasty dishes every day.',
          'Discover new flavors that will delight your taste buds.',
          'Explore our menu full of yummy options.',
          'Experience the joy of good food with us.',
          'Treat yourself to a satisfying meal today.',
          
        ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
      });
      

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h3 className='mb-5 text-warning fw-bold'>Welcome To Food Website  </h3>
                            <h4 className='mb-5 text-success fw-bold'>{typeEffect}</h4>
                            <button className='text-white bg-danger'>
                                Download Now
                            </button>
                        </div>
                        
                    </div>
                     
                </div>
                
                
            </header>
            
        </div>
    )
}

export default Home;
