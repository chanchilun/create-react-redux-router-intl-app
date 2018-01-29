import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 35%;
  margin: auto;
  left: 0;
  right: 0;
  max-width: 70%;
  animation: fadeInFromTop 0.5s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const View = styled.div`
  height: ${(props) => props.minHeight}vh;
  background-image: ${(props) =>
    props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : `none`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  position: relative;
`;

View.propTypes = {
  backgroundImageUrl: PropTypes.string,
  minHeight: PropTypes.number
};

export default (props) => {
  return (
    <View {...props}>
      <Wrapper>{props.children}</Wrapper>
    </View>
  );
};
