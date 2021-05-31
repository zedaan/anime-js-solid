import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  .content {
    max-width: 795px;
    margin: auto;

    .main--heading {
      padding-top: 186px;

      .heading__description {
        p {
          position: relative;
          color: rgba(242, 241, 234, 0.7);
          font-style: normal;
          font-weight: 100;
          font-size: 44px;
          line-height: 60px;
          letter-spacing: -0.02em;
          padding-top: 20px;
          padding-bottom: 70px;
          margin-bottom: 75px;

          .title {
            position: absolute;
            color: rgba(242, 241, 234, 1);
            font-weight: 800;
            font-size: 44px;
            line-height: 80px;
            left: 0;
            bottom: 0;
            padding-left: 60px;

            &:before {
              position: absolute;
              content: "";
              left: 0;
              top: 40px;
              height: 2px;
              width: 50px;
              background-color: rgba(242, 241, 234, 1);
              bottom: 60px;
            }
          }
        }
      }
    }

    .description {
      p {
        color: #f2f1ea;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.01em;
      }
    }

    .section__value {
      h3 {
        color: #ffffff;
        font-weight: 800;
        font-size: 44px;
        line-height: 80px;
        letter-spacing: -0.5px;
        margin-bottom: 16px;
      }

      h4 {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 800;
        font-size: 44px;
        line-height: 60px;
        letter-spacing: -0.5px;
        margin-bottom: 30px;
      }

      p {
        color: #f2f1ea;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.01em;
        margin-bottom: 32px;

        b {
          font-weight: 800;
        }
      }
    }
    .performance {
      h2 {
        color: #ffffff;
        font-weight: 800;
        font-size: 44px;
        line-height: 80px;
        letter-spacing: -0.5px;
      }

      p {
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.01em;
        color: #f2f1ea;
        margin-bottom: 40px;
      }

      h3 {
        color: #ffffff;
        font-weight: 800;
        font-size: 32px;
        line-height: 60px;
        letter-spacing: -0.5px;
      }

      hr {
        width: 572px;
        height: 3px;
        background-color: #ffffff;
        margin-bottom: 32px;
      }

      h4 {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 800;
        font-size: 32px;
        line-height: 60px;
        letter-spacing: -0.5px;
        margin-bottom: 32px;
      }

      button {
        color: #ffffff;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 17px 33px;
        margin-bottom: 100px;
      }
    }

    @media (max-width: 1200px) {
      .main--heading {
        .heading__description {
          p {
            font-size: 40px;
            line-height: 60px;

            .title {
              font-weight: 600;
              font-size: 40px;
              line-height: 60px;
            }
          }
        }
      }
    }

    @media (max-width: 1024px) {
      max-width: 640px;
    }

    @media (max-width: 767px) {
      max-width: 100%;
      padding: 0 1.25em;

      .main--heading {
        padding-top: 115px;

        .heading__description {
          p {
            font-size: 30px;
            font-weight: 100;
            line-height: 45px;
            padding-bottom: 40px;

            .title {
              font-size: 22px;
              line-height: 20px;
              letter-spacing: normal;

              &:before {
                top: 10px;
              }
            }
          }
        }
      }
      .performance {
        hr {
          width: 100%;
        }
      }
      .description {
        p {
          font-size: 20px;
          letter-spacing: normal;
        }
      }
      .section__value h3 {
        font-size: 32px;
        line-height: inherit;
        font-weight: 800;
        margin: 0px;
        margin-bottom: 20px;
        letter-spacing: normal;
      }
      .section__value h4 {
        font-size: 30px;
        line-height: inherit;
        font-weight: 800;
        margin-bottom: 40px;
        letter-spacing: normal;
      }
      .performance h2{
        font-size:32px;
        letter-spacing: normal;
        line-height: inherit;
      }
      .performance h3{
        font-size:32px;
        letter-spacing: normal;
        line-height: inherit;
      }
      .performance h4{
        font-size:26px;
        letter-spacing: normal;
        line-height: inherit;
      }
    }
  }
`;

export default Wrapper;
