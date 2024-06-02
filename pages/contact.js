import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Robinson & Sroykeeree LP</title>
          <meta name="description" content="Contact our team" />
          <meta
            property="og:title"
            content="Contact - Robinson &amp; Sroykeeree LP"
          />
          <meta property="og:description" content="Contact our team" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4a2a4b1-73c4-4d0c-8cab-d446c67c6f17/9a77d407-87dd-444f-9f67-4caf42256e5b?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="contact-max-width">
          <Link href="/">
            <a className="contact-link">Robinson &amp; Sroykeeree</a>
          </Link>
          <div className="contact-nav">
            <NavigationLinks
              link2="About"
              link3="Books"
              rootClassName="navigation-links-root-class-name28"
            ></NavigationLinks>
            <Link href="/contact">
              <a className="contact-link1 button-secondary button button-md">
                Get in touch
              </a>
            </Link>
          </div>
        </div>
        <div className="contact-container1">
          <form className="contact-form">
            <h1 className="contact-text">Contact us</h1>
            <span className="contact-text1">
              <span>
                Please use this contact form for simple enquiries. To submit
                your manuscript, please tell us more
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/manuscript">
                <a className="contact-link2">here</a>
              </Link>
              <span>.</span>
            </span>
            <input
              type="text"
              required="true"
              placeholder="Name"
              className="contact-textinput input"
            />
            <input
              type="text"
              required="true"
              placeholder="Email"
              className="contact-textinput1 input"
            />
            <textarea
              target
              placeholder="Please describe your manuscript..."
              className="contact-textarea textarea"
            ></textarea>
            <button type="button" className="contact-button button">
              Send
            </button>
          </form>
        </div>
        <footer className="contact-footer7 thq-section-padding">
          <div className="contact-max-width1 thq-section-max-width">
            <div className="contact-credits">
              <div className="thq-divider-horizontal"></div>
              <div className="contact-row">
                <div className="contact-container2">
                  <span className="contact-text4 thq-body-small">
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
          .contact-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-max-width {
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
          .contact-link {
            font-family: 'Times New Roman';
            text-decoration: none;
          }
          .contact-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .contact-link1 {
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .contact-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .contact-form {
            width: 60%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-text {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          .contact-text1 {
            width: 50%;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: 'Times New Roman';
          }
          .contact-link2 {
            text-decoration: underline;
          }
          .contact-textinput {
            width: 50%;
            height: 10vh;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
          }
          .contact-textinput1 {
            width: 50%;
            height: 10vh;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
          }
          .contact-textarea {
            width: 50%;
            height: 20vh;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Times New Roman';
          }
          .contact-button {
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
          .contact-button:hover {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            background-color: var(--dl-color-scheme-brown);
          }
          .contact-footer7 {
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
          .contact-max-width1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .contact-container2 {
            display: flex;
            align-items: flex-start;
          }
          .contact-text4 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Times New Roman';
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .contact-form {
              width: 80%;
            }
            .contact-text1 {
              width: 60%;
            }
            .contact-textinput {
              width: 60%;
            }
            .contact-textinput1 {
              width: 60%;
            }
            .contact-textarea {
              width: 60%;
            }
            .contact-button {
              width: 35%;
            }
          }
          @media (max-width: 767px) {
            .contact-max-width {
              padding: var(--dl-space-space-unit);
            }
            .contact-text1 {
              width: 80%;
            }
            .contact-textinput {
              width: 80%;
            }
            .contact-textinput1 {
              width: 80%;
            }
            .contact-textarea {
              width: 80%;
            }
            .contact-button {
              width: 35%;
            }
            .contact-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .contact-container1 {
              height: auto;
            }
            .contact-form {
              width: 80%;
            }
            .contact-text1 {
              width: 80%;
            }
            .contact-button {
              width: 50%;
            }
            .contact-max-width1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
