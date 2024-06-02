import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Robinson & Sroykeeree LP</title>
          <meta
            name="description"
            content="Robinson &amp; Sroykeeree publishes high-quality non-fiction legal books for university students and engaging fiction novels for children."
          />
          <meta
            property="og:title"
            content="About - Robinson &amp; Sroykeeree LP"
          />
          <meta
            property="og:description"
            content="Robinson &amp; Sroykeeree publishes high-quality non-fiction legal books for university students and engaging fiction novels for children."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4a2a4b1-73c4-4d0c-8cab-d446c67c6f17/d5e40ec3-5aca-4170-8f53-6b9f87d02408?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="about-max-width">
          <Link href="/">
            <a className="about-link">Robinson &amp; Sroykeeree</a>
          </Link>
          <div className="about-nav">
            <NavigationLinks
              link2="About"
              link3="Books"
              rootClassName="navigation-links-root-class-name32"
            ></NavigationLinks>
            <Link href="/contact">
              <a className="about-link1 button-secondary button button-md">
                Get in touch
              </a>
            </Link>
          </div>
        </div>
        <div className="about-container1">
          <h1 className="about-text">About</h1>
          <span className="about-text01">
            <span className="about-text02">
              We mostly publish non-fiction books in the areas of law,
              philosophy, history, politics, and economics. We also publish
              fiction novels. comic books and children books which include
              similar themes and subject areas, or discuss important educational
              topics such as the origin of life, or convey profound
              philosophical or scientific concepts. Books in other disciplines
              may be published if they offer distinctive and compelling
              educational materials for students. 
            </span>
            <br></br>
            <br></br>
            <span>
              For non-fiction books and articles, we do require a demonstrated
              level of expertise in the subject matter. An advanced degree in a
              related field, for example, or in the case of historical events or
              biographies, proof of extensive research with proper citations.  
            </span>
            <br></br>
            <br></br>
            <br></br>
          </span>
        </div>
        <footer className="about-footer7 thq-section-padding">
          <div className="about-max-width1 thq-section-max-width">
            <div className="about-credits">
              <div className="thq-divider-horizontal"></div>
              <div className="about-row">
                <div className="about-container2">
                  <span className="about-text09 thq-body-small">
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
          .about-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-max-width {
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
          .about-link {
            font-family: 'Times New Roman';
            text-decoration: none;
          }
          .about-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-link1 {
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .about-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            min-height: 75vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-text {
            width: 40%;
            font-size: 2rem;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .about-text01 {
            width: 40%;
            font-size: 16px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .about-text02 {
            width: 40%;
            margin-top: var(--dl-space-space-unit);
          }
          .about-footer7 {
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
          .about-max-width1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .about-container2 {
            display: flex;
            align-items: flex-start;
          }
          .about-text09 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .about-text {
              width: 60%;
            }
            .about-text01 {
              width: 60%;
              font-size: 16px;
              font-style: normal;
              font-family: Times New Roman;
              font-weight: 400;
            }
          }
          @media (max-width: 767px) {
            .about-max-width {
              padding: var(--dl-space-space-unit);
            }
            .about-text {
              width: 80%;
            }
            .about-text01 {
              width: 80%;
            }
            .about-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .about-text {
              width: 80%;
            }
            .about-text01 {
              width: 80%;
            }
            .about-max-width1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
