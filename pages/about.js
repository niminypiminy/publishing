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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4a2a4b1-73c4-4d0c-8cab-d446c67c6f17/9a77d407-87dd-444f-9f67-4caf42256e5b?org_if_sml=1&amp;force_format=original"
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
          <span className="about-text1">
            Robinson &amp; Sroykeeree is a reputable publishing company that
            focuses on publishing high-quality non-fiction legal books for
            university students and engaging fiction novels for children. Our
            publications often explore educational themes related to law,
            economics, or philosophy. We are dedicated to offering distinctive
            and compelling educational materials that support students in
            achieving academic success.
          </span>
        </div>
        <footer className="about-footer7 thq-section-padding">
          <div className="about-max-width1 thq-section-max-width">
            <div className="about-credits">
              <div className="thq-divider-horizontal"></div>
              <div className="about-row">
                <div className="about-container2">
                  <span className="about-text2 thq-body-small">
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
          .about-text1 {
            width: 40%;
            font-size: 16px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
            font-weight: 400;
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
          .about-text2 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          @media (max-width: 767px) {
            .about-max-width {
              padding: var(--dl-space-space-unit);
            }
            .about-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
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
