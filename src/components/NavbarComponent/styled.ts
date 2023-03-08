import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  color: #fff;

  padding: 10px 20px;

  .logo-box > svg {
    width: 60px;
    height: 60px;
  }

  ul {
    list-style-type: none;
    margin: 0;

    li {
      display: inline-block;

      a {
        text-decoration: none;

        color: black;
        font-weight: 600;
        transition: color 0.2s;

        &:hover {
          color: rgb(255, 152, 0);
          transition: color 0.2s;
        }
      }

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;
