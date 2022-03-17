import React, {useState} from 'react';

const CheckboxWithLabel = ({labelOn, labelOff}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
        
        <div className='tc'>
            
      <input type="checkbox" checked={isChecked} onChange={onChange} className='tc pl7'/>
      {isChecked ? labelOn : labelOff}
      </div>
    </label>
  );
};

export default CheckboxWithLabel;