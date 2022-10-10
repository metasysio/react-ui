import React from 'react';
import { TextField } from './TextField';

export default {
  title: "TextField Component"
}

export const TextFieldSimple = () => {
  return (
  <div style={{width: '50%'}}>
    <TextField name='Simple' />
    <TextField name='Label' label='Your label here' />
    <TextField name='Error' label='Name' error={'Error message example'} />
  </div>
  )
}