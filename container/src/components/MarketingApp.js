import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // const { onParentNavigate } =
     mount(ref.current),{
      onNavigate: () => {
        console.log('container onNavigate')
      }
     }

  });

  return <div ref={ref} />;
};