import { Image } from 'antd';

export default function ImageFunction({src, alt}) {
    return (
     <Image
        width={'auto'}
        src={src}
        alt={alt}
        />
    );
}