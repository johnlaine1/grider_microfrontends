import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  const handleNavigation = ({ pathname: nextPathName }) => {
    const currentPathName = history.location.pathname;

    if (currentPathName !== nextPathName) {
      history.push(nextPathName);
    }
  };

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: handleNavigation,
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
