import { css } from 'styled-components'
import media from 'styles/media'

export default css`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  *:focus {
    outline: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  html {
    @media (${media.screenMdMin}) {
      // width: 414px;
      position: relative;
      margin: 0 auto;
      transform: translate3d(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.85);
      overflow: hidden;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'Prompt', sans-serif;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    line-height: 1.5;

    > div#root {
      height: inherit;

      > div {
        height: inherit;
      }
    }

    @media (${media.screenMdMin}) {
      transform: translate3d(0, 0, 0);
      height: 100% !important;
    }
  }

  // Slick: Over Write styles
  .slick-dots {
    position: relative;
    top: -20px;

    li {
      margin: 0 2px;
      width: 8px;
      height: 8px;

      &.slick-active {
        button {
          background-color: ${(props) => props.theme.colors.orange500};
        }
      }

      button {
        width: 8px;
        height: 8px;
        padding: 4px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.gray150};

        &::before,
        &::after {
          display: none;
        }
      }
    }
  }

  // Overwrite FacncyBox
  .fancybox-slide--image {
    padding: 44px 20px !important;
  }

  .fancybox-slide--video {
    padding: 44px 20px !important;
    overflow: hidden !important;

    .fancybox-content {
      width: 100% !important;
      height: auto !important;
    }
  }
`
