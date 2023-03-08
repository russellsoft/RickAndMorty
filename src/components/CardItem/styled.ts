import styled from "styled-components";
import { BadgeProps } from "./types";

export const CardContainer = styled.div`
  border-radius: 10px;
  background: rgb(60, 62, 68);

  max-width: 600px;

  display: flex;
  flex-direction: column;

  width: 100%;

  img {
    border-radius: 10px 10px 0 0;
  }

  @media (min-width: 480px) {
    flex-direction: row;

    img {
      height: 100%;
			width: 190px;
			object-fit: cover;
      border-radius: 10px 0 0 10px;
    }

    .right-side {
      padding: 15px 20px;
    }
  }

  .right-side {
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .name-layout {
      color: white;
      font-weight: 600;
      font-size: 24px;
    }

    .badge {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center !important;
    }

    .status-layout {
      color: white;

      display: flex;
      gap: 5px;
      align-items: flex-start;
      flex-direction: column;

      font-size: 15px;
      font-weight: 400;

      .naming {
        color: rgb(158, 158, 158);
        font-weight: 500;
      }
    }
  }
`;

export const Badge = styled.div<BadgeProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.background};
`;
