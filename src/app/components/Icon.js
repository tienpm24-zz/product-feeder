import React from 'react';
import styled from 'styled-components';

export const Icon = ({ source, height, width, fill, className, ...props }) => {
  return (
    <IconSource
      className={className}
      fill={fill || '#333'}
      height={height || '20px'}
      width={width || '20px'}
      dangerouslySetInnerHTML={{ __html: source }}
      {...props}
    />
  );
};

const IconSource = styled.div`
  line-height: 0;
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
  }
  path {
    fill: ${(props) => props.fill};
  }
`;
