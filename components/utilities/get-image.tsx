// Image
import React, { useMemo } from 'react';

// Get Movie Image
const GetImage = React.memo(({data, path}: any) => {

    const getImageSrc = useMemo(() => {
        return data?.[path] ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE}${data?.[path]}` : `/images/${path}.jpg`;
    }, [data]);

    return (
        <img src={getImageSrc} alt={data?.title} />
    )
})

export default GetImage;