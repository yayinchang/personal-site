import Image from 'next/image'

const cdnHost = process.env.NEXT_PUBLIC_CDN_HOST;

const loader = ({ src, width, quality }) => {
  return `${cdnHost}/${src}?w=${width}&q=${quality || 75}`
}

export default function CDNImage(src, width, height, alt, className = ''){
  return (
    <Image
      loader={loader}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  )
}