import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FloatInput } from './FloatInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Floating Label',
  component: FloatInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FloatInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FloatInput> = (args) => <FloatInput {...args} />;

export const Sizes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sizes.args = {
  name:'name',
  placeholder:'Kullanıcı Adı',
  onChange:()=>{}
};


export const Borders = Template.bind({});
Borders.args = {
  name:'name',
  border:true,
  placeholder:'Kullanıcı Adı',
  onChange:()=>{}
};


export const Verification = Template.bind({});
Verification.args = {
  name:'name',
  verification:true,
  placeholder:'Kullanıcı Adı',
  onChange:()=>{}
};

export const Appendless = Template.bind({});
Appendless.args = {
  name:'name',
  appendix:false,
  placeholder:'Kullanıcı Adı',
  onChange:()=>{}
};
