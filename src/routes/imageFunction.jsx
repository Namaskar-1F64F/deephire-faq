import { Image } from 'antd';

export default function ImageFunction({src, alt}) {
    return (
     <Image
        width={'75%'}
        src={src}
        alt={alt}
        />
    );
}