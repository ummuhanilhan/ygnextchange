import { FloatingLabelInput } from '@shared/elements/inputs';
import React from 'react';

interface FloatInputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the FloatInput be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * FloatInput contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
    /**
     * Optional click handler
     */
     onChange?: () => void;
 /**
   * Opts
 */
  name: string;
  type?: string;
  placeholder?: string;
  example?: string;
  value?: string;
  textarea?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FloatInput = ({
  primary = false,
  size = 'medium',
  name = 'medium',
  backgroundColor,
  label,
  ...props
}: FloatInputProps) => {
  const mode = primary ? 'bg-red-500 text-white  storybook-FloatInput--primary' : 'storybook-FloatInput--secondary';
  return (
    <FloatingLabelInput
        type="FloatInput"
        className={['storybook-FloatInput', `storybook-FloatInput--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        placeholder=''
        name={name}
        textarea
        {...props}
    />
  );
};
