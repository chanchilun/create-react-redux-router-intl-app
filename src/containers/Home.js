import React from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import ImageHeroHeader from '../components/HeroHeader/ImageHeroHeader';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Section from '../components/StyledSection/Section';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Grid from '../components/Grid';
import Button from '../components/Button';
import StyleCard from '../components/Card';
import Content from '../components/Content';

const Home = (props) => {
  return (
    <Content>
      <Grid viewHeight justify={'flex-end'}>
        <Grid.Row>
          <Grid.Col gb={12}>
            <h1 style={{color: 'white'}}>
              Build your online shop that sells intelligently
            </h1>
            <h2 style={{color: 'white'}}>
              A statics website is a thing of the past, now all you need is a
              website to sell smart
            </h2>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row justify={'center'}>
          <Grid.Col xs={12} sm={8} md={4} lg={4} xl={9}>
            <Button disabled rounded onClick={() => props.changePage()}>
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
          >
            <img
              alt={''}
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
      <Section bgColor={'white'}>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <h1>What is GoodMalling?</h1>
              <h4 style={{color: '#9eacbe'}}>
                You cannot miss it if you have a shop
              </h4>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify={'center'}>
            <Grid.Col gb={2.5}>
              <StyleCard
                style={{backgroundColor: '#e8e8e8'}}
                hoverable
                title={
                  <div>
                    <p>Freelancer</p>
                    <h3>Free</h3>
                    <img
                      alt={''}
                      src={
                        'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                      }
                    />
                  </div>
                }
              >
                <b>A.I Selling</b>
                <b>BI Predictive Report</b>
                <b>A.I Salebot</b>
              </StyleCard>
            </Grid.Col>
            <Grid.Col gb={2.5}>
              <StyleCard
                style={{backgroundColor: '#e8e8e8'}}
                hoverable
                title={
                  <div>
                    <p>Freelancer</p>
                    <h3>Free</h3>
                    <img
                      alt={''}
                      src={
                        'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                      }
                    />
                  </div>
                }
              >
                <b>A.I Selling</b>
                <b>BI Predictive Report</b>
                <b>A.I Salebot</b>
              </StyleCard>
            </Grid.Col>
            <Grid.Col gb={2.5}>
              <StyleCard
                style={{backgroundColor: '#e8e8e8'}}
                hoverable
                title={
                  <div>
                    <p>Freelancer</p>
                    <h3>Free</h3>
                    <img
                      alt={''}
                      src={
                        'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                      }
                    />
                  </div>
                }
              >
                <b>A.I Selling</b>
                <b>BI Predictive Report</b>
                <b>A.I Salebot</b>
              </StyleCard>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col gb={6}>
              <img
                alt={''}
                style={{objectFit: 'contain'}}
                src={
                  'https://media.gq.com/photos/56e867a9239f13cf5b2ba2d8/master/w_2000/david-beckham-gq-0416-cover-sq.jpg'
                }
              />
            </Grid.Col>
            <Grid.Col justify={'center'} gb={6}>
              <h1>Build your styled online shop with clicks</h1>
              <p>
                Few clicks and your shop’s website is ready. It is all codeless
              </p>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
      <Section bgColor={'white'}>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <h1>What is GoodMalling?</h1>
              <h4 style={{color: '#9eacbe'}}>
                You cannot miss it if you have a shop
              </h4>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col justify={'center'} gb={6}>
              <h1>Build your styled online shop with clicks</h1>
              <p>
                Few clicks and your shop’s website is ready. It is all codeless
              </p>
            </Grid.Col>
            <Grid.Col gb={6}>
              <img
                alt={''}
                style={{objectFit: 'contain'}}
                src={
                  'https://media.gq.com/photos/56e867a9239f13cf5b2ba2d8/master/w_2000/david-beckham-gq-0416-cover-sq.jpg'
                }
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
      {/*<div>
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
*/}
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
    </Content>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changePage: () => dispatch(push('/about-us'))
});

export default connect(null, mapDispatchToProps)(Home);
