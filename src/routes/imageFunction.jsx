import { Image } from 'antd';

export default function ImageFunction({src, alt}) {
    return (
     <Image
        width={500}
        src={src}
        alt={alt}
        />
    );
}