import { FloatingLabelInput, FloatingLabelPhone, FloatInputProps } from '@shared/elements/inputs';
import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const FloatInput = ({
  size = 'medium',
  name,
  backgroundColor,
  ...props
}: FloatInputProps) => {
  const [value, setValue] = React.useState('')
  return (
   <React.Fragment>
     <div className='flex items-start gap-2'>
          <FloatingLabelInput
         {...props}
          className='w-72 bg-white'
          value={value}
          size='small'
          onChange={(e:string)=>setValue(e)}
        />
        <FloatingLabelInput
        {...props}
          className='w-72 bg-white'
          value={value}
          size='medium'
          onChange={(e:string)=>setValue(e)}
        />
        <FloatingLabelInput
          {...props}
            active
            className='w-72 bg-white'
            value={value}
            size='large'
            onChange={(e:string)=>setValue(e)}
        />
      </div>
     
   </React.Fragment>
  );
};

/**
 
 <div className='flex items-start gap-2'>
          <FloatingLabelPhone
         {...props}
          className='w-72 bg-white'
          value={value}
          size='small'
          onChange={(e:string)=>setValue(e)}
        />
   
      </div>
      
 */