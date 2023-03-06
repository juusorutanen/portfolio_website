import React from 'react';
import { RightBar, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
        <Component />
      </div>
      <RightBar active={idName} />
    </div>
  );
};

export default AppWrap;