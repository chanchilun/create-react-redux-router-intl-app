import React from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import ImageHeroHeader from '../components/HeroHeader/ImageHeroHeader';
import Section from '../components/Section/Section';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage';
import ResponsiveEmbeddedYoutube from '../components/ResponsiveEmbeddedYoutube/ResponsiveEmbeddedYoutube';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Grid from '../components/Grid';
import Button from '../components/Button';

const testArrSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = (props) => (
  <div>
    <Grid viewHeight justify={'flex-end'}>
      <Grid.Row>
        <Grid.Col center gb={12}>
          <h1>Build your online shop that sells intelligently</h1>
          <h2>
            A statics website is a thing of the past, now all you need is a
            website to sell smart
          </h2>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col center xs={12} sm={8} md={4} lg={4} xl={2}>
          <Button rounded onClick={() => props.changePage()}>
            <span>Start to build, it's free!</span>
          </Button>
        </Grid.Col>
        <Grid.Col
          justify={'flex-end'}
          center
          xs={8}
          sm={8}
          md={6}
          lg={4}
          xl={4}
          gb={12}
        >
          <img
            style={{objectFit: 'contain'}}
            src={
              'https://media.gq.com/photos/56e867a9239f13cf5b2ba2d8/master/w_2000/david-beckham-gq-0416-cover-sq.jpg'
            }
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col
          style={{backgroundColor: 'grey'}}
          flexRow
          justify={'space-around'}
          center
          gb={12}
        >
          <h1>123</h1>
          <h1>456</h1>
        </Grid.Col>
      </Grid.Row>
    </Grid>

    <div>
      <Grid autoColWidth={150}>
        <Grid.Col>
          <img
            style={{maxHeight: '400px', objectFit: 'cover'}}
            src={
              'https://media.gq.com/photos/56e867a9239f13cf5b2ba2d8/master/w_2000/david-beckham-gq-0416-cover-sq.jpg'
            }
          />
          <h1>special</h1>
          <p>Content</p>
        </Grid.Col>
        {testArrSize.map((index) => (
          <Grid.Col key={index}>
            <img
              style={{maxHeight: '400px', objectFit: 'cover'}}
              src={
                'https://media.gq.com/photos/56e867a9239f13cf5b2ba2d8/master/w_2000/david-beckham-gq-0416-cover-sq.jpg'
              }
            />
            <h1>{index}</h1>
            <p>Content</p>
          </Grid.Col>
        ))}
      </Grid>
    </div>

    <ImageHeroHeader
      minHeight={85}
      backgroundImageUrl={
        'https://res.cloudinary.com/dxlb0hdxg/image/upload/v1508857581/Web_Header_2_-min_xpf4gz.jpg'
      }
    >
      <Row type="flex" justify="center" align="middle">
        <Col span={20}>
          <h1>
            <FormattedMessage
              id="home-header-title-1"
              defaultMessage="Project Title"
            />
          </h1>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col span={20}>
          <Button
            size="large"
            onClick={() => props.changePage()}
            type="primary"
          >
            Go to about page via redux
          </Button>
        </Col>
      </Row>
    </ImageHeroHeader>
    <Section>
      <SectionHeader>
        <h2>
          <FormattedMessage
            id="home-section-title-1"
            defaultMessage="Section Title"
          />
        </h2>
        <p>
          <FormattedMessage
            id="home-section-desc-1"
            defaultMessage="Description"
          />
        </p>
      </SectionHeader>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
        </Col>
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
        </Col>
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
        </Col>
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
        </Col>
      </Row>
    </Section>
    <Section backgroundColor="#CECECE">
      <SectionHeader>
        <h2>
          <FormattedMessage
            id="home-section-title-2"
            defaultMessage="Section Title"
          />
        </h2>
      </SectionHeader>
      <Row gutter={16} type="flex" justify="space-around" align="middle">
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
      </Row>
      <Row gutter={16} type="flex" justify="space-around" align="middle">
        <Col span={3} />
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={3} />
      </Row>
    </Section>
    <Section>
      <SectionHeader>
        <h2>
          <FormattedMessage
            id="home-section-title-3"
            defaultMessage="Section Title"
          />
        </h2>
      </SectionHeader>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={16}>
          <ResponsiveEmbeddedYoutube src="https://www.youtube.com/embed/a1lVf3jZdi8" />
        </Col>
      </Row>
    </Section>
    <Section>
      <SectionHeader>
        <h2>
          <FormattedMessage
            id="home-section-title-4"
            defaultMessage="Section Title"
          />
        </h2>
      </SectionHeader>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
          <p>Introduction</p>
        </Col>
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
          <p>Introduction</p>
        </Col>
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
          <p>Introduction</p>
        </Col>
        <Col span={4}>
          <ResponsiveImage
            alt="image"
            src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"
          />
          <p>Introduction</p>
        </Col>
      </Row>
    </Section>
    <Section>
      <SectionHeader>
        <h2>
          <FormattedMessage
            id="home-section-title-6"
            defaultMessage="Section Title"
          />
        </h2>
      </SectionHeader>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={12}>
          <Button
            size="large"
            onClick={() => props.changePage()}
            type="primary"
          >
            Contact Us
          </Button>
        </Col>
      </Row>
    </Section>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  changePage: () => dispatch(push('/about-us'))
});

export default connect(null, mapDispatchToProps)(Home);
