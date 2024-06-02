import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const Manuscript = (props) => {
  return (
    <>
      <div className="manuscript-container">
        <Head>
          <title>Manuscript - Creative Agency Page</title>
          <meta
            property="og:title"
            content="Manuscript - Creative Agency Page"
          />
        </Head>
        <div className="manuscript-max-width">
          <Link href="/">
            <a className="manuscript-link">Robinson &amp; Sroykeeree</a>
          </Link>
          <div className="manuscript-nav">
            <NavigationLinks
              link2="About"
              link3="Books"
              rootClassName="navigation-links-root-class-name30"
            ></NavigationLinks>
            <Link href="/contact">
              <a className="manuscript-link1 button-secondary button button-md">
                Get in touch
              </a>
            </Link>
          </div>
        </div>
        <div className="manuscript-container1">
          <form className="manuscript-form">
            <h1 className="manuscript-text">Share a little about yourself</h1>
            <span className="manuscript-text1">
              We are excited to hear more about your manuscript. Please share
              some details about your work and a brief biography, and our
              editors will be in touch with you shortly.
            </span>
            <input
              type="text"
              required="true"
              placeholder="Name"
              className="manuscript-textinput input"
            />
            <input
              type="text"
              required="true"
              placeholder="Email"
              className="manuscript-textinput1 input"
            />
            <textarea
              target
              placeholder="A short bio"
              className="manuscript-textarea textarea"
            ></textarea>
            <textarea
              target
              placeholder="Please briefly describe your manuscript..."
              className="manuscript-textarea1 textarea"
            ></textarea>
            <button type="button" className="manuscript-button button">
              Send
            </button>
          </form>
        </div>
        <footer className="manuscript-footer7 thq-section-padding">
          <div className="manuscript-max-width1 thq-section-max-width">
            <div className="manuscript-credits">
              <div className="thq-divider-horizontal"></div>
              <div className="manuscript-row">
                <div className="manuscript-container2">
                  <span className="manuscript-text2 thq-body-small">
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
          .manuscript-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .manuscript-max-width {
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
          .manuscript-link {
            font-family: 'Times New Roman';
            text-decoration: none;
          }
          .manuscript-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .manuscript-link1 {
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .manuscript-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .manuscript-form {
            width: 60%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .manuscript-text {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .manuscript-text1 {
            width: 50%;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: 'Times New Roman';
          }
          .manuscript-textinput {
            width: 50%;
            height: 10vh;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
          }
          .manuscript-textinput1 {
            width: 50%;
            height: 10vh;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
          }
          .manuscript-textarea {
            width: 50%;
            height: 30vh;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
          }
          .manuscript-textarea1 {
            width: 50%;
            height: 30vh;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
          }
          .manuscript-button {
            width: 50%;
            height: 10vh;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            font-family: 'Times New Roman';
            font-weight: 400;
            background-color: var(--dl-color-scheme-lightbrown);
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .manuscript-button:hover {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            background-color: var(--dl-color-scheme-brown);
          }
          .manuscript-footer7 {
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
          .manuscript-max-width1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .manuscript-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .manuscript-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .manuscript-container2 {
            display: flex;
            align-items: flex-start;
          }
          .manuscript-text2 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .manuscript-form {
              width: 80%;
            }
            .manuscript-text1 {
              width: 80%;
            }
            .manuscript-textinput {
              width: 60%;
            }
            .manuscript-textinput1 {
              width: 60%;
            }
            .manuscript-textarea {
              width: 60%;
            }
            .manuscript-textarea1 {
              width: 60%;
            }
            .manuscript-button {
              width: 35%;
            }
          }
          @media (max-width: 767px) {
            .manuscript-max-width {
              padding: var(--dl-space-space-unit);
            }
            .manuscript-form {
              width: 80%;
            }
            .manuscript-text {
              text-align: center;
            }
            .manuscript-text1 {
              width: auto;
              text-align: center;
            }
            .manuscript-textinput {
              width: 80%;
            }
            .manuscript-textinput1 {
              width: 80%;
            }
            .manuscript-textarea {
              width: 80%;
            }
            .manuscript-textarea1 {
              width: 80%;
            }
            .manuscript-button {
              width: 35%;
            }
            .manuscript-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .manuscript-form {
              width: 80%;
              height: 80%;
            }
            .manuscript-text {
              width: auto;
              text-align: center;
            }
            .manuscript-text1 {
              width: auto;
            }
            .manuscript-textinput {
              width: 80%;
            }
            .manuscript-button {
              width: 50%;
            }
            .manuscript-max-width1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Manuscript
