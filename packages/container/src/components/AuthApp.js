import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const currentPathName = history.location.pathname;

        if (currentPathName !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
