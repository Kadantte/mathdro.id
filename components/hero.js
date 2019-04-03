import React from "react";

const Hero = props => (
  <>
    <svg data-name="Hero" viewBox="0 0 580.43 89.29" {...props}>
      <defs>
        <clipPath id="clip">
          <path d="M10.41 25.65h16.46l-1.79 11h.69a21.42 21.42 0 0 1 19.45-11.81c8.45 0 14.1 4.59 15 11.83h.65c3.7-7.19 11.58-11.83 20.77-11.83 11.54 0 18.41 7.72 16.14 21.26l-7 42H73.4l6.5-38.57c1.06-6.95-2.48-10.4-8-10.4-6.3 0-10.73 4.35-11.7 10.85L53.74 88.1H36.95l6.58-38.93c.93-6.14-2.24-10-8-10s-10.9 4.48-11.91 11.48l-6.34 37.47H0zM104.22 70.65c2.36-13.9 14.1-18.09 26.66-19.22 10.93-1.1 15.36-1.63 16.09-5.61v-.24c.81-5.12-2-8.09-7.8-8.09-6.18 0-10.61 3-12.48 7.19l-15.77-1.3c4.23-11.38 15.32-18.53 30.32-18.53 13.82 0 25.4 6.26 23 21.13l-7 42.11h-16.47l1.46-8.66h-.49c-4 5.81-10.65 9.84-19.87 9.84-11.87-.02-19.65-6.31-17.65-18.62zm39.5-4.88l1.06-6.62c-2.24 1.38-8.62 2.19-12.4 2.8-6.26.85-10.77 3.25-11.54 8.13-.73 4.71 2.56 7.23 8 7.23 7.58 0 13.76-5 14.9-11.55zM212.08 38.65H200.3l-5 30.24c-.81 4.8 1.42 6.1 4.88 6.1a25.29 25.29 0 0 0 4.39-.57l.65 12.88a35.06 35.06 0 0 1-9.71 1.63c-12.72.49-20-5.57-17.84-17.76l5.31-32.52h-8.54l2.19-13h8.49l2.48-15h17.31l-2.48 15h11.79zM233.78 88.08H216.5l13.82-83.23h16.78l-5.2 31.8h.69c4-7.36 11.14-11.83 20.65-11.83 13 0 20.12 8.86 17.68 23.49l-6.7 39.77h-17.24l6.1-36.66c1.26-7.68-2.15-12.19-9.14-12.19s-12.8 4.71-14.14 12.76zM290.74 56.94c3.54-21.46 16.87-32.11 30.6-32.11 10.45 0 14.43 6.22 15.85 11.3h.53l5.2-31.29h17.3l-13.8 83.24h-17.07l1.67-10h-.73c-3.29 5.2-9.47 11-19.51 11-14.31.01-23.49-11.25-20.04-32.14zm43.93-.08c1.83-11.14-1.83-18.25-10.24-18.25-8.58 0-14.23 7.44-16 18.25s1.38 18.45 9.92 18.45c8.36 0 14.5-7.31 16.33-18.45zM370.96 25.65h16.78l-1.83 10.89h.65c3.58-7.72 9.88-11.79 17-11.79a13.57 13.57 0 0 1 8 2.28l-7.48 14.22a12.8 12.8 0 0 0-5.73-1.38c-6.95 0-13.33 5.24-14.71 12.88l-5.81 35.32h-17.28zM409.43 56.82c3.09-19.18 16.87-32 35.76-32s28.69 13.09 25.52 32.51c-3.13 19.1-16.91 31.94-35.76 31.94-19.05.03-28.73-13.06-25.52-32.45zm43.85-.08c1.71-10.77-1.3-18.7-9.84-18.7-8.78 0-14.79 8.21-16.58 19.22-1.75 10.73 1.3 18.61 9.84 18.61 8.74.01 14.76-8.11 16.59-19.13zM487.29 25.65h17.31l-10.38 62.43h-17.33zm2-16.91C489.86 3.9 494.53 0 499.65 0s8.9 3.9 8.37 8.74-5.2 8.78-10.36 8.78-8.95-3.98-8.34-8.78zM510.94 56.94c3.54-21.46 16.87-32.11 30.6-32.11 10.45 0 14.43 6.22 15.85 11.3h.53l5.2-31.29h17.31l-13.81 83.24h-17.07l1.67-10h-.73c-3.29 5.2-9.47 11-19.51 11-14.31.01-23.5-11.25-20.04-32.14zm43.93-.08c1.83-11.14-1.83-18.25-10.24-18.25-8.58 0-14.23 7.44-16 18.25s1.38 18.45 9.92 18.45c8.36 0 14.49-7.31 16.32-18.45z" />
        </clipPath>
      </defs>
      <image
        clipPath="url(#clip)"
        xlinkHref="/static/image.jpg"
        width="100%"
        height="512px"
        y="-256px"
      />
    </svg>

    <style jsx>{`
      svg {
        margin: 0 2rem;
      }
      svg,
      g,
      image,
      path {
        width: 100%;
        max-width: 48rem;
      }
    `}</style>
  </>
);

export default Hero;
