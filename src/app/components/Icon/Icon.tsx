import React, { FC } from 'react';
import styled from 'styled-components';

type IconProps = {
  source: string;
  height?: string;
  width?: string;
  fill?: string;
  className?: string;
};

export const Icon: FC<IconProps> = ({
  source,
  height,
  width,
  fill,
  className,
  ...props
}) => {
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

const IconSource = styled('div')<{
  height: string;
  width: string;
  fill: string;
}>`
  line-height: 0;
  svg {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
  }
  path {
    fill: ${(props) => props.fill};
  }
`;
