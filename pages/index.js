import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Robinson & Sroykeeree LP</title>
          <meta
            name="description"
            content="Robinson &amp; Sroykeeree LP is a publishing agency based out of Bangkok Thailand. "
          />
          <meta property="og:title" content="Robinson &amp; Sroykeeree LP" />
          <meta
            property="og:description"
            content="Robinson &amp; Sroykeeree LP is a publishing agency based out of Bangkok Thailand. "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4a2a4b1-73c4-4d0c-8cab-d446c67c6f17/d5e40ec3-5aca-4170-8f53-6b9f87d02408?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <header data-role="Header" className="home-header">
          <div className="home-max-width">
            <Link href="/">
              <a className="home-link">Robinson &amp; Sroykeeree</a>
            </Link>
            <div className="home-nav">
              <NavigationLinks
                link2="About"
                link3="Books"
                rootClassName="navigation-links-root-class-name8"
              ></NavigationLinks>
              <Link href="/contact">
                <a className="home-link1 button-secondary button button-md">
                  Get in touch
                </a>
              </Link>
            </div>
          </div>
        </header>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-heading-container">
                <h1 className="home-text">Publish your book with us.</h1>
                <span className="home-text01">
                  We specialize in the publication and distribution of fiction
                  and non-fiction books, primarily in the fields of law,
                  history, economics, politics, and philosophy. We also publish
                  comic books and childrens books, with similar themes.
                </span>
                <Link href="/manuscript">
                  <a className="home-link2 button-primary button-lg button">
                    Send your Manuscript
                  </a>
                </Link>
              </div>
              <div className="home-gallery">
                <div className="home-container01">
                  <img
                    alt="image"
                    src="/designer-1000w.jpeg"
                    className="home-image"
                  />
                </div>
                <div className="home-container02">
                  <img
                    alt="image"
                    src="/designer%20(7)-1000w.jpeg"
                    className="home-image1"
                  />
                  <img
                    alt="image"
                    src="/designer%20(6)-1000w.jpeg"
                    className="home-image2"
                  />
                </div>
                <div className="home-container03">
                  <img
                    alt="image"
                    src="/designer%20(4)-1000w.jpeg"
                    className="home-image3"
                  />
                  <div className="home-container04">
                    <img
                      alt="image"
                      src="/rectangle%2095%20%5B2%5D-1000w.png"
                      className="home-image4"
                    />
                    <img
                      alt="image"
                      src="/rectangle%2095%20%5B1%5D-1000w.png"
                      className="home-image5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-services section-container">
            <div className="home-max-width2 max-content-container">
              <div className="home-heading-container1">
                <div className="home-text-container">
                  <span className="home-text02">our services</span>
                  <h2 className="home-text03">
                    <span>
                      A wide range of
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>book publishing solutions.</span>
                  </h2>
                </div>
              </div>
              <div className="home-cards-container">
                <div className="home-services-card services-card">
                  <div className="home-container05">
                    <img
                      alt="image"
                      src="/dice-5-200h.png"
                      className="home-image6"
                    />
                  </div>
                  <span className="home-text07">Design</span>
                  <span className="home-text08">
                    Many authors need help with formatting, illustrations and
                    cover designs. 
                  </span>
                  <span className="home-text09">Learn more</span>
                </div>
                <div className="home-services-card1 services-card">
                  <div className="home-container06">
                    <img
                      alt="image"
                      src="/website-200h.png"
                      className="home-image7"
                    />
                  </div>
                  <span className="home-text10">Distribution</span>
                  <span className="home-text11">
                    <span>
                      We will distribute your book to our wide range of
                      retailers in Bangkok.  
                    </span>
                    <br></br>
                  </span>
                  <span className="home-text14">Learn more</span>
                </div>
                <div className="home-services-card2 services-card">
                  <div className="home-container07">
                    <img
                      alt="image"
                      src="/file-document-200w.png"
                      className="home-image8"
                    />
                  </div>
                  <span className="home-text15">Revenue</span>
                  <span className="home-text16">
                    We offer authors a generous percentage for each book sold,
                    paid out monthly.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text17">Learn more</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-process section-container">
            <div className="home-max-width3 max-content-container">
              <span className="home-text18">Our process</span>
              <h2 className="home-text19">
                <span>
                  Simple three step process.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </h2>
              <div className="home-step">
                <span className="home-text22">01</span>
                <div className="home-container08">
                  <span className="home-text23">Send us your manuscript</span>
                  <span className="home-text24">
                    Authors are invited to submit their manuscripts accompanied
                    by a one-page author profile. Kindly provide us with a brief
                    overview of your work and your biography. If your project
                    captures our interest, we will provide you with a secure
                    link for manuscript submission.
                  </span>
                </div>
              </div>
              <div className="home-step1">
                <span className="home-text25">02</span>
                <div className="home-container09">
                  <span className="home-text26">Review and editing phase</span>
                  <span className="home-text27">
                    Upon receiving your submission, our editorial team will
                    carefully review your work. If we determine that it meets
                    our publishing criteria, we will extend you an offer.
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <span className="home-text28">03</span>
                <div className="home-container10">
                  <span className="home-text29">
                    Publication and Distribution. 
                  </span>
                  <span className="home-text30">
                    After the terms are negotiated, we will distribute your
                    product to retailers and online platforms.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-banner section-container">
            <div className="home-max-width4 max-content-container">
              <h2 className="home-text31">Let’s collaborate!</h2>
              <span className="home-text32">
                When you partner with us, you&apos;ll have a dedicated team of
                professionals supporting you through every stage of the process.
                From design to distribution, we&apos;ll help you get your book
                onto the market.
              </span>
              <Link href="/contact">
                <a className="home-link3 button-lg button-secondary-white button">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </main>
        <footer className="home-footer7 thq-section-padding">
          <div className="home-max-width5 thq-section-max-width">
            <div className="home-credits">
              <div className="thq-divider-horizontal"></div>
              <div className="home-row">
                <div className="home-container11">
                  <span className="home-text33 thq-body-small">
                    © 2024 Robinson &amp; Sroykeeree LP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .home-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-link {
            font-family: 'Times New Roman';
            text-decoration: none;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link1 {
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
          }
          .home-max-width1 {
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-heading-container {
            flex: 1;
            display: flex;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-size: 3rem;
            text-align: center;
            font-family: 'Times New Roman';
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text01 {
            color: var(--dl-color-scheme-black);
            width: 75%;
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 1.44;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link2 {
            transition: 0.3s;
            font-family: 'Times New Roman';
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-link2:hover {
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-gallery {
            width: 100%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
          }
          .home-container01 {
            width: 25%;
            align-self: stretch;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container02 {
            width: 25%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
            flex-direction: column;
          }
          .home-image1 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container03 {
            width: 50%;
            display: flex;
            grid-gap: 20px;
            flex-direction: column;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container04 {
            width: 100%;
            display: flex;
            grid-gap: 20px;
          }
          .home-image4 {
            flex: 1;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image5 {
            flex: 1;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-services {
            height: auto;
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width2 {
            flex-direction: column;
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text02 {
            color: var(--dl-color-scheme-brown);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Times New Roman';
            font-weight: 400;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text03 {
            font-size: 3rem;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 63px;
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            grid-gap: 20px;
          }
          .home-services-card {
            width: 30%;
            height: auto;
          }
          .home-container05 {
            width: var(--dl-size-size-small);
            height: auto;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(182, 71, 47, 0.1);
          }
          .home-image6 {
            width: 24px;
            height: var(--dl-size-size-small);
            object-fit: contain;
          }
          .home-text07 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text08 {
            font-family: 'Times New Roman';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text09 {
            cursor: pointer;
            font-family: 'Times New Roman';
            text-decoration: underline;
          }
          .home-services-card1 {
            width: 30%;
            height: auto;
          }
          .home-container06 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(182, 71, 47, 0.1);
          }
          .home-image7 {
            width: 24px;
            height: 24px;
            object-fit: contain;
          }
          .home-text10 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text11 {
            font-family: 'Times New Roman';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text14 {
            cursor: pointer;
            font-family: 'Times New Roman';
            text-decoration: underline;
          }
          .home-services-card2 {
            width: 30%;
            height: auto;
          }
          .home-container07 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(182, 71, 47, 0.1);
          }
          .home-image8 {
            width: 24px;
            height: 24px;
            object-fit: contain;
          }
          .home-text15 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text16 {
            font-family: 'Times New Roman';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text17 {
            cursor: pointer;
            font-family: 'Times New Roman';
            text-decoration: underline;
          }
          .home-process {
            background-color: var(--dl-color-scheme-white80);
          }
          .home-max-width3 {
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text18 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text19 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-size: 3rem;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 63px;
            margin-bottom: var(--dl-space-space-fourunits);
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-step {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text22 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-size: 64px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container08 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text23 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-size: 24px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 300;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text24 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-family: 'Times New Roman';
          }
          .home-step1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text25 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-size: 64px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container09 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text26 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-size: 24px;
            font-family: 'Times New Roman';
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text27 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-family: 'Times New Roman';
          }
          .home-step2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text28 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-size: 64px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container10 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text29 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-size: 24px;
            font-family: 'Times New Roman';
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text30 {
            fill: var(--dl-color-scheme-darkblue);
            color: var(--dl-color-scheme-darkblue);
            font-family: 'Times New Roman';
          }
          .home-banner {
            height: 75vh;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-brown);
          }
          .home-max-width4 {
            align-items: center;
            justify-content: center;
          }
          .home-text31 {
            color: var(--dl-color-scheme-white);
            font-size: 3rem;
            text-align: center;
            font-family: 'Times New Roman';
            font-weight: 400;
            line-height: 63px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text32 {
            color: var(--dl-color-scheme-white);
            width: 75%;
            font-size: 1.2rem;
            text-align: center;
            font-family: 'Times New Roman';
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link3 {
            font-family: 'Times New Roman';
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .home-max-width5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-container11 {
            display: flex;
            align-items: flex-start;
          }
          .home-text33 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .home-heading-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .home-text {
              font-size: 3rem;
            }
            .home-text01 {
              color: var(--dl-color-scheme-black);
            }
            .home-gallery {
              flex-direction: column;
            }
            .home-container01 {
              width: 100%;
            }
            .home-image {
              width: 80%;
            }
            .home-container02 {
              width: 100%;
              flex-direction: column;
            }
            .home-image1 {
              width: 80%;
            }
            .home-container03 {
              width: 100%;
              align-items: stretch;
            }
            .home-services {
              width: 100%;
            }
            .home-text08 {
              font-family: Times New Roman;
            }
            .home-text10 {
              font-size: 24px;
            }
            .home-text11 {
              font-family: Times New Roman;
            }
            .home-text15 {
              font-size: 24px;
              font-style: normal;
              font-family: Times New Roman;
              font-weight: 700;
            }
            .home-text16 {
              font-family: Times New Roman;
            }
            .home-text24 {
              color: var(--dl-color-scheme-darkblue);
            }
            .home-text26 {
              color: var(--dl-color-scheme-darkblue);
              font-size: 24px;
              font-family: Times New Roman;
              line-height: 31px;
            }
            .home-text27 {
              color: var(--dl-color-scheme-darkblue);
            }
            .home-text29 {
              color: var(--dl-color-scheme-darkblue);
            }
            .home-text30 {
              color: var(--dl-color-scheme-darkblue);
              font-family: Times New Roman;
            }
            .home-text32 {
              color: var(--dl-color-scheme-white);
              font-size: 1.2rem;
              font-family: Times New Roman;
              line-height: 26px;
            }
          }
          @media (max-width: 767px) {
            .home-max-width {
              padding: var(--dl-space-space-unit);
            }
            .home-text {
              font-size: 48px;
            }
            .home-container02 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image1 {
              height: 100%;
            }
            .home-container04 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image4 {
              width: 100%;
            }
            .home-image5 {
              width: 100%;
            }
            .home-text22 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-text25 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-text28 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .home-cards-container {
              flex-direction: column;
            }
            .home-services-card {
              width: auto;
            }
            .home-services-card1 {
              width: auto;
            }
            .home-services-card2 {
              width: auto;
            }
            .home-text22 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-text25 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-text28 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-max-width5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
