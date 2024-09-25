import React from 'react';

function mapFiles(context: any) {
  const keys = context.keys();
  const values = keys.map(context);
  return keys.reduce(
    (accumulator: any, key: any, index: any) => ({
      ...accumulator,
      [key]: values[index],
    }),
    {}
  );
}
const svgs = mapFiles(require.context('./res', true, /\.(svg)$/));

interface IIcons {
  ico: string;
  rotationDeg?: number;
  size?: number;
  className?: string;
}

export function Icon(props: IIcons) {
  const { ico, rotationDeg, size, className } = props;

  const As = svgs[`./${ico}.svg`].default;

  return (
    <As
      preserveAspectRatio={'none'}
      className={className}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotationDeg}deg)`,
      }}
    />
  );
}
