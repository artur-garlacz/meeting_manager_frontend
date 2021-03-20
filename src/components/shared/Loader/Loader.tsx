import * as React from 'react';
import styled from 'styled-components';

const Loader: React.FC = () => (
  <Container>
    <Inner>
      <i className="fa fa-spinner fa-spin" style={{ fontSize: '24px' }} />
    </Inner>
  </Container>
);

export default Loader;

const Container = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 200px;
  text-align: center;
  margin: auto;
  opacity: 0.1;
`;
