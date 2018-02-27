import React from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import Section from '../components/Section/Section';
import Grid from '../components/Grid';
import Button from '../components/Button';
import StyleCard from '../components/Card';
import Content from '../components/Content';
import {RouteConstants, ThemeConstants} from '../constants';
import './Home.css';
import BGI from '../images/LandingPageBGI.png';
import Freelancer from '../images/Freelancer.png';

const Home = (props) => {
  return (
    <Content>
      <Section hasNavbar className="welcomeSection" justify={'flex-end'}>
        <Grid>
          <Grid.Row justify={'center'}>
            <Grid.Col lg={10} md={8}>
              <h1>Build your online shop that sells intelligently</h1>
              <h3>
                A statics website is a thing of the past, now all you need is a
                website to sell smart
              </h3>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify={'center'}>
            <Grid.Col sm={10} md={6} lg={4}>
              <Button full rounded onClick={() => props.changePage()}>
                Start to build, it's free!
              </Button>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify={'center'}>
            <Grid.Col justify={'flex-end'} sm={12} md={10} lg={8}>
              <img alt={''} style={{objectFit: 'contain'}} src={BGI} />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
      {/*<Section className='partner-section' bgColor={'#9eacbe'}>
                <Grid.Row>
                    <Grid.Col
                        style={{backgroundColor: 'Nepal'}}
                        flexRow
                        justify={'space-around'}
                        gb={12}
                    >
                        <img src={'http://brandmark.io/logo-rank/random/mcdonalds.png'}/>
                    </Grid.Col>
                </Grid.Row>
            </Section>*/}
      <Section bgColor={'white'}>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <h2>What is GoodMalling?</h2>
              <h4 className="subHead">You cannot miss it if you have a shop</h4>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify={'center'}>
            <Grid.Col justify={'center'} lg={5} md={5} sm={10}>
              <h3>Build your styled online shop with clicks</h3>
              <br />
              <p>
                Few clicks and your shop’s website is ready. It is all codeless
              </p>
            </Grid.Col>
            <Grid.Col lg={5} md={5} sm={10}>
              <img
                src={
                  'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png'
                }
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify={'center'}>
            <Grid.Col lg={5} md={5} sm={10}>
              <img
                src={
                  'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png'
                }
              />
            </Grid.Col>
            <Grid.Col justify={'center'} lg={5} md={5} sm={10}>
              <h3>Build your styled online shop with clicks</h3>
              <br />
              <p>
                Few clicks and your shop’s website is ready. It is all codeless
              </p>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
      <Section className="actionSection" bgColor={'#108ee9'}>
        <Grid>
          <Grid.Row justify="center">
            <Grid.Col lg={5} md={5} sm={10}>
              <h3>Your online shop is ready</h3>
              <h4>Your online shop is ready</h4>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify="center" lg={5} md={5} sm={10}>
            <Grid.Col lg={4} md={4} sm={10}>
              <Button
                type={ThemeConstants.BTN_POSITIVE}
                outline
                full
                rounded
                onClick={() => props.changePage()}
              >
                Start to build, it's free!
              </Button>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
      <Section bgColor={'white'}>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <h2>We are loved by our users</h2>
              <h4 className="subHead">Have a look on why our users love us</h4>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify={'center'}>
            <Grid.Col lg={4} md={4} sm={10}>
              <StyleCard className={'card'} hoverable>
                <div>
                  <img
                    src={
                      'http://www.banglaapparel.com/public/news-img/en/adidas-originals-logo_2016-03-06_14572402721.jpg'
                    }
                  />
                  <h3>Jenny Bakery</h3>
                  <h4>“Business is much easier with GoodMalling”</h4>
                  <p>Allen, Sale Manager</p>
                </div>
              </StyleCard>
            </Grid.Col>
            <Grid.Col lg={4} md={4} sm={10}>
              <StyleCard className={'card'} hoverable>
                <div>
                  <img
                    src={
                      'https://image.freepik.com/free-vector/abstract-logo-in-flame-shape_1043-44.jpg'
                    }
                  />
                  <h3>Jenny Bakery</h3>
                  <h4>“Business is much easier with GoodMalling”</h4>
                  <p>Allen, Sale Manager</p>
                </div>
              </StyleCard>
            </Grid.Col>
            <Grid.Col lg={4} md={4} sm={10}>
              <StyleCard className={'card'} hoverable>
                <div>
                  <img
                    src={'http://brandmark.io/logo-rank/random/mcdonalds.png'}
                  />
                  <h3>Jenny Bakery</h3>
                  <h4>“Business is much easier with GoodMalling”</h4>
                  <p>Allen, Sale Manager</p>
                </div>
              </StyleCard>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
      <Section bgColor={'white'}>
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <h2>Plans</h2>
              <h4 className="subHead">
                Absolutely Free for first 30 days with no credit card required
              </h4>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row justify={'center'}>
            <Grid.Col lg={4} md={4} sm={10}>
              <StyleCard
                hoverable
                title={
                  <div>
                    <h4>Freelancer</h4>
                    <h2>Free</h2>
                  </div>
                }
              >
                <img src={Freelancer} />
                <b>A.I Selling</b>
                <b>BI Predictive Report</b>
                <b>A.I Salebot</b>
              </StyleCard>
            </Grid.Col>
            <Grid.Col lg={4} md={4} sm={10}>
              <StyleCard
                hoverable
                title={
                  <div>
                    <h4>Business</h4>
                    <h2>$230</h2>
                  </div>
                }
              >
                <img src={Freelancer} />
                <b>A.I Selling</b>
                <b>BI Predictive Report</b>
                <b>A.I Salebot</b>
              </StyleCard>
            </Grid.Col>
            <Grid.Col lg={4} md={4} sm={10}>
              <StyleCard
                hoverable
                title={
                  <div>
                    <h4>NGO</h4>
                    <h2>$80</h2>
                  </div>
                }
              >
                <img src={Freelancer} />
                <b>A.I Selling</b>
                <b>BI Predictive Report</b>
                <b>A.I Salebot</b>
              </StyleCard>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
      {/* <ImageHeroHeader
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
            </ImageHeroHeader>*/}
      {/*<Section>
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
            </Section>*/}
      {/*<Section>
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
            </Section>*/}
    </Content>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changePage: () => dispatch(push(RouteConstants.ABOUT_US))
});

export default connect(null, mapDispatchToProps)(Home);
