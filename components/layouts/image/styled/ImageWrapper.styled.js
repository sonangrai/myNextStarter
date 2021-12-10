import styled from "styled-components";

export const ImageWrapper = styled.div`
  height: ${(props) => props.height};
  position: relative;

  img {
    object-fit: ${(props) => props.layout};
  }
`;
