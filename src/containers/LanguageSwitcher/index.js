import React from 'react';
import {connect} from 'react-redux';
import {localeDict} from '../../config';
import Radio from 'antd/lib/radio';
import Button from './Button';
import {switchUserLocale} from '../../reducers/IntlReducer';
import styled from 'styled-components';

const Container = styled(({children}) => <Radio.Group>{children}</Radio.Group>)`
  border-color: transparent !important;
`;

const LanguageSwitcher = (props) => {
  const isSelected = (locale) =>
    locale.replace('-', '') === props.currentLocale;
  const localeName = (locale) => localeDict[locale] || locale;
  const localeKeys = Object.keys(localeDict);
  return (
    <Container>
      {localeKeys.map((locale) => (
        <Button
          key={locale}
          locale={locale}
          isSelected={isSelected(locale)}
          localeName={localeName(locale)}
          href={`?lang=${locale}`}
          onClick={(e) => {
            props.switchUserLocale(locale);
            e.preventDefault();
          }}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentLocale: state.IntlReducer.userLocale
});

const mapDispatchToProps = (dispatch) => ({
  switchUserLocale: (userLocale) => dispatch(switchUserLocale(userLocale))
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
