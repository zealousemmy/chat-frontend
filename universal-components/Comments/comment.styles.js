import styled from "styled-components";

export const CommentStyles = styled.div`
  background-color: ${({ Color }) => Color.PrimaryColor};
  display: flex;
  padding: 10px;

  .profile-pics {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin: 0px 10px;

    .image {
      border-radius: 50%;
    }
  }

  .comment-body {
    background-color: ${({ Color }) => Color.TertiaryColor};
    width: 90%;
    padding: 10px;
    border-radius: 10px;

    .comment-body-header {
      display: flex;
      justify-content: space-between;

      h3 {
        color: ${({ Color }) => Color.MainTextColor && Color.MainTextColor};
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
      }
    }

    .comment-body-text {
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        margin: 5px 0px;
        color: ${({ Color }) => Color.MainTextColor && Color.MainTextColor};
        display: block;
        line-height: 2;
        max-height: 11rem;
        overflow: hidden !important;
        text-overflow: ellipsis;
        white-space: wrap;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        line-clamp: 5;
      }
    }

    .comment-body-social {
      display: flex;
      align-items: center;

      .comment-body-social-item {
        display: flex;
        align-items: center;
        padding: 0px 12px;

        p {
          font-size: 13px;
          font-weight: 400;
          padding: 0px 4px;
        }

        .comment-body-social-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
