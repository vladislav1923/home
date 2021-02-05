interface Props {
    src: string;
    src2x: string;
    alt?: string;
    className: string;
}

export function Image({
  src, src2x, className, alt = '',
}: Props) {
  return (
    <img
      className={className}
      src={src}
      srcSet={`${src2x} 2x`}
      loading="lazy"
      alt={alt}
    />
  );
}
