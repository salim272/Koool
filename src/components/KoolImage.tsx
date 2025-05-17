// components/CachedImage.tsx
import React, { useState } from 'react';
import { Image, ImageProps, ImageSourcePropType, View } from 'react-native';
import { FastImageProps } from 'react-native-fast-image';
import { SvgUri } from 'react-native-svg';
import CachedImage from 'expo-cached-image'

type KoolImageProps = {
    source: ImageSourcePropType | string;
} & Omit<ImageProps, 'source'>;

const KoolImage: React.FC<KoolImageProps> = ({ source, ...props }) => {
    const [hasError, setHasError] = useState(false);

    if (typeof source === 'string') {
        if (source.endsWith('.svg')) {
            return <SvgUri uri={source} {...props} />;
        } else {
            return (

                <CachedImage
                    source={
                        hasError
                            ? require('../../assets/images/Default.png')
                            :
                            {
                                uri: source,
                            }
                    }
                    cacheKey={source}
                    onError={() => setHasError(true)}
                    {...props}
                />
            );
        }
    } else {
        return <Image source={source} {...props} />;
    }
};

export default KoolImage;