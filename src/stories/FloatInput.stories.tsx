import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FloatInput } from './FloatInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/FloatInput',
  component: FloatInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FloatInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FloatInput> = (args) => <FloatInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'FloatInput',
  type:'text',
  name:'name',
  placeholder:'',
  example:'',
  value:'',
  textarea:'',
  onChange:()=>{}
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'FloatInput',
  type:'text',
  name:'name',
  placeholder:'',
  example:'',
  value:'',
  textarea:'',
  onChange:()=>{}
}; 