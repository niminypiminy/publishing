import React from 'react'

import PropTypes from 'prop-types'

const Footer4 = (props) => {
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="thq-body-small">
                  © 2024 Robinson &amp; Sroykeeree LP
                </span>
              </div>
              <div className="footer4-footer-links">
                <span className="footer4-text1 thq-body-small">
                  {props.privacyLink}
                </span>
                <span className="thq-body-small">{props.termsLink}</span>
                <span className="thq-body-small">{props.cookiesLink}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
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
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  link4: 'Link 4',
  link5: 'Link 5',
  link3: 'Link 3',
  cookiesLink: 'Cookies Settings',
  link2: 'Link 2',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  termsLink: 'Terms of Service',
  link1: 'Link 1',
  privacyLink: 'Privacy Policy',
  logoAlt: 'Logo',
}

Footer4.propTypes = {
  link4: PropTypes.string,
  link5: PropTypes.string,
  link3: PropTypes.string,
  cookiesLink: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  termsLink: PropTypes.string,
  link1: PropTypes.string,
  privacyLink: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Footer4
