import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className="hero-header78">
        <div className="hero-column thq-section-padding thq-section-max-width">
          <div className="hero-content1">
            <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
            <p className="hero-text2 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions">
            <button className="thq-button-filled hero-button1">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button className="thq-button-outline hero-button2">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-text2 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container1 {
            width: 100%;
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero-row-container2 {
            width: 100%;
          }
          .hero-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero-container2 {
            display: contents;
          }
          @media (max-width: 767px) {
            .hero-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button1 {
              width: 100%;
            }
            .hero-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image6Alt: 'Choir singing during a church service',
  image1Alt: 'Church exterior with welcoming entrance',
  image9Alt:
    'Baptism ceremony in a river with sunlight streaming through trees',
  image12Alt: 'Church bell tower against a clear blue sky',
  image12Src:
    'https://images.unsplash.com/photo-1532140225690-f6d25ab4c891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Learn More',
  image11Alt: 'Counseling session with a caring pastor and parishioner',
  image2Src:
    'https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Pastor delivering a sermon to the congregation',
  image8Alt: 'Fellowship gathering with people chatting and laughing',
  image9Src:
    'https://images.unsplash.com/photo-1543525238-54e3d131f7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1491234323906-4f056ca415bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Welcome to Our Church',
  image2Alt: 'Diverse group of people worshipping together',
  image1Src:
    'https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1495001258031-d1b407bc1776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Bible open on a wooden table with a cross',
  content1: 'Join us in worship and community as we grow in faith together.',
  image3Src:
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Mission trip group praying before departure',
  action1: 'Visit Us',
  image5Alt: "Children's program with kids engaged in activities",
  image7Src:
    'https://images.unsplash.com/photo-1509851399009-9a417b689b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Community outreach event with volunteers helping others',
  image11Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDI1OTgxMXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image6Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image12Src: PropTypes.string,
  action2: PropTypes.string,
  image11Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image4Src: PropTypes.string,
  image6Src: PropTypes.string,
  heading1: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.string,
  image3Src: PropTypes.string,
  image10Alt: PropTypes.string,
  action1: PropTypes.string,
  image5Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image11Src: PropTypes.string,
}

export default Hero