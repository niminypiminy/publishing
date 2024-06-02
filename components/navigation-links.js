import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/about">
          <a className="navigation-links-link">About</a>
        </Link>
        <span className="navigation-links-text">Our Services</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            font-family: 'Times New Roman';
            font-weight: 500;
            line-height: 1.6;
            margin-left: 41px;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .navigation-links-text {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            font-family: 'Times New Roman';
            font-weight: 500;
            line-height: 1.6;
            margin-left: 41px;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }

          .navigation-links-root-class-name8 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name10 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name12 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name14 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name16 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .navigation-links-root-class-name17 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name20 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name22 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name24 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name26 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name28 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name30 {
            margin-right: var(--dl-space-space-threeunits);
          }

          .navigation-links-root-class-name32 {
            margin-right: var(--dl-space-space-threeunits);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-root-class-name26 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .navigation-links-root-class-name24 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Portofolio',
  rootClassName: '',
  link2: 'About',
  link4: 'Blog',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
