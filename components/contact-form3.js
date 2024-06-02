import React from 'react'

import PropTypes from 'prop-types'

const ContactForm3 = (props) => {
  return (
    <>
      <div className="contact-form3-contact9 thq-section-padding">
        <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="contact-form3-image1 thq-img-ratio-4-3"
          />
          <div className="contact-form3-content thq-flex-column">
            <div className="contact-form3-section-title thq-card">
              <span className="thq-body-small">{props.content2}</span>
              <div className="contact-form3-content1">
                <h2 className="thq-heading-2">{props.heading1}</h2>
                <span className="thq-body-small">{props.content1}</span>
              </div>
            </div>
            <form className="thq-card">
              <div className="contact-form3-input">
                <label htmlFor="contact-form-3-name" className="thq-body-small">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-form-3-name"
                  placeholder="Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-input1">
                <label
                  htmlFor="contact-form-3-email"
                  className="thq-body-small"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-form-3-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form3-container">
                <label
                  htmlFor="contact-form-3-message"
                  className="thq-body-small"
                >
                  Message
                </label>
                <textarea
                  id="contact-form-3-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                ></textarea>
              </div>
              <div className="contact-form3-checkbox">
                <input
                  type="checkbox"
                  id="contact-form-3-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-3-check"
                  className="contact-form3-text6 thq-body-small"
                >
                  I accept the Terms
                </label>
              </div>
              <button
                type="submit"
                className="contact-form3-button thq-button-filled"
              >
                <span className="thq-body-small">{props.action}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form3-contact9 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form3-image1 {
            flex: 1;
            width: auto;
            height: auto;
            max-width: 640px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .contact-form3-content {
            gap: 0;
            flex: 1;
            align-items: stretch;
          }
          .contact-form3-section-title {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form3-input {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-input1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form3-container {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form3-checkbox {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form3-text6 {
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .contact-form3-button {
            align-self: flex-start;
          }
          @media (max-width: 991px) {
            .contact-form3-max-width {
              flex-direction: column;
            }
            .contact-form3-content {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-form3-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm3.defaultProps = {
  content2: 'Get in touch with us',
  imageAlt: 'Image1',
  heading1: 'Contact us',
  imageSrc:
    'https://images.unsplash.com/photo-1680458841817-7035de6c6b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzMwNzE4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  action: 'Submit',
}

ContactForm3.propTypes = {
  content2: PropTypes.string,
  imageAlt: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc: PropTypes.string,
  content1: PropTypes.string,
  action: PropTypes.string,
}

export default ContactForm3
