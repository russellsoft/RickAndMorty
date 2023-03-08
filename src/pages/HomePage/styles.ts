import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
  padding: 20px;

  .ant-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SelectorsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  .ant-input,
  .ant-select {
    flex: 1;
    min-width: 250px;
  }
`;
