import React, { useState } from 'react';
import Fintach from './Fintach';
import Consumer from './Consumer';
import Healthtech from './Healthtech';
import Saas from './Saas';
import B2b from './B2b';
import Accel from './Accel';

const ButtonGroup = ({ activeButton, setActiveButton }) => {
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className=' w-full h-full  flex md:justify-center justify-start mx-[-16px] mb-[2rem] overflow-x-scroll'>
      <button
        className={`button ${activeButton === 'Consumertech' ? 'active' : ''} buttonG`}
        onClick={() => handleButtonClick('Consumertech')}
      
      >
        Consumertech
      </button>
      <button
        className={`button ${activeButton === 'Fintech' ? 'active' : ''} buttonG`}
        onClick={() => handleButtonClick('Fintech')}
      >
        Fintech
      </button>
      <button
        className={`button ${activeButton === 'Healthtech' ? 'active' : ''} buttonG`}
        onClick={() => handleButtonClick('Healthtech')}
      >
        Healthtech
      </button>
      <button
        className={`button ${activeButton === 'SaaS' ? 'active' : ''} buttonG`}
        onClick={() => handleButtonClick('SaaS')}
      >
        SaaS
      </button>
      <button
        className={`button ${activeButton === 'B2B' ? 'active' : ''} buttonG`}
        onClick={() => handleButtonClick('B2B')}
      >
        B2B
      </button>
      <button
        className={`button ${activeButton === 'Accel Updates' ? 'active' : ''} buttonG`}
        onClick={() => handleButtonClick('Accel Updates')}
      >
        Accel Updates
      </button>
    </div>
  );
};

const ContentSection = ({ activeButton }) => {
  const renderContent = () => {
    switch (activeButton) {
      case 'Consumertech':
        return (<Consumer/>)
      case 'Fintech':
        return (<Fintach/>)
      case 'Healthtech':
        return (<Healthtech/>)
      case 'SaaS':
        return (<Saas/>)
      case 'B2B':
        return (<B2b/>)
      case 'Accel Updates':
        return (<Accel/>)
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

function ContentHub() {
  const [activeButton, setActiveButton] = useState('Consumertech');

  return (
    <div className='mt-[40px]'>
      <ButtonGroup activeButton={activeButton} setActiveButton={setActiveButton} />
      <ContentSection activeButton={activeButton} />
    </div>
  );
}

export default ContentHub;
