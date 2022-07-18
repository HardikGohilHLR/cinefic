// Common Functions
import { useMemo } from 'react';

// Get Movie Image
export const GetMovieImage = ({movie}) => {

    const getImage = useMemo(() => {
        return `https://image.tmdb.org/t/p/original${movie?.poster_path}`;
    }, [movie?.poster_path]);

    return (
        <div style={{width: '200px'}} >
            <img src={getImage} height="200"/>
        </div>
    )
}
