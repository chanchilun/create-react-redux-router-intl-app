import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from './View';
import Content from './Content';

import {FormattedMessage} from 'react-intl';

const ImageHeroHeader = (props) => {
  return (
    <View
      backgroundImageUrl={props.backgroundImageUrl}
      minHeight={props.minHeight}
    />
  );
};

ImageHeroHeader.propTypes = {
  backgroundImageUrl: PropTypes.string,
  minHeight: PropTypes.number
};

export default ImageHeroHeader;
