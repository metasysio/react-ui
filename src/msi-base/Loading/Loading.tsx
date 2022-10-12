import React from 'react';
import { LoadingProps } from './Loading.types'
import './Loading.scss';

export const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div data-testid="loading" className={`${'ellipsis'} `}>
      <div className={`${'ellipsis'} ${className}`}></div>
      <div className={`${'ellipsis'} ${className}`}></div>
      <div className={`${'ellipsis'} ${className}`}></div>
      <div className={`${'ellipsis'} ${className}`}></div>
    </div>
  );
};