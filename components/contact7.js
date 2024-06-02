import React from 'react'

import PropTypes from 'prop-types'

const Contact7 = (props) => {
  return (
    <>
      <div className="contact7-container thq-section-padding">
        <div className="contact7-max-width thq-section-max-width">
          <div className="contact7-content thq-flex-row">
            <div className="contact7-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact7-content2 thq-flex-row">
            <div className="contact7-container1">
              <img
                alt={props.location1ImgAlt}
                src={props.location1ImgSrc}
                className="contact7-image thq-img-ratio-16-9"
              />
              <h3 className="contact7-text2 thq-heading-3">
                {props.location1}
              </h3>
              <p className="thq-body-large">{props.location1Description}</p>
              <div className="contact7-container2">
                <span className="thq-button-flat thq-body-small">
                  Get directions
                </span>
              </div>
            </div>
            <div className="contact7-container3">
              <img
                alt={props.location2ImgAlt}
                src={props.location2ImgSrc}
                className="contact7-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact7-text5 thq-heading-3">
                {props.location2}
              </h3>
              <p className="thq-body-large">{props.location2Description}</p>
              <div className="contact7-container4">
                <span className="thq-button-flat thq-body-small">
                  Get directions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact7-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact7-max-width {
            align-self: center;
          }
          .contact7-content {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .contact7-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact7-content2 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact7-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image {
            object-fit: cover;
          }
          .contact7-text2 {
            text-align: center;
          }
          .contact7-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact7-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact7-image1 {
            object-fit: cover;
          }
          .contact7-text5 {
            text-align: center;
          }
          .contact7-container4 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .contact7-content2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact7-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact7-image {
              width: 100%;
            }
            .contact7-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact7.defaultProps = {
  location1ImgAlt: 'image1Alt',
  location1ImgSrc:
    'https://images.unsplash.com/photo-1692856158816-96674fba40c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzMwNzE4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1673904041572-d506b2bf739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzMwNzE4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Locations',
  location2ImgAlt: 'image2Alt',
  location2: 'Cluj - Napoca',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location1: 'Bucharest',
}

Contact7.propTypes = {
  location1ImgAlt: PropTypes.string,
  location1ImgSrc: PropTypes.string,
  location2Description: PropTypes.string,
  location2ImgSrc: PropTypes.string,
  location1Description: PropTypes.string,
  heading1: PropTypes.string,
  location2ImgAlt: PropTypes.string,
  location2: PropTypes.string,
  content1: PropTypes.string,
  location1: PropTypes.string,
}

export default Contact7
