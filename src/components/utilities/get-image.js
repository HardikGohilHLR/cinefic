// Image
import React, { useMemo } from 'react';

// Get Movie Image
const GetImage = React.memo(({data, path}) => {

    const getImageSrc = useMemo(() => {
        return data?.[path] ? `https://image.tmdb.org/t/p/original${data?.[path]}` : `/images/${path}.jpg`;
    }, [data]);

    return (
        <img src={getImageSrc} alt={data?.title} />
    )
})

export default GetImage;