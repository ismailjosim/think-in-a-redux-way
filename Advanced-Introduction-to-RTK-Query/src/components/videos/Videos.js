import React from 'react';
import { useGetVideosQuery } from '../../features/api/apiSlice';
import Error from '../ui/Error';
import VideoLoader from '../ui/loaders/VideoLoader';
import SingleVideo from './SingleVideo';

const Videos = () => {
    const { data, isError, isLoading } = useGetVideosQuery(undefined);

    let content = null;
    if (isLoading) {
        content = <VideoLoader></VideoLoader>
    }

    if (!isLoading && isError) {
        content = <Error />
    }

    if (!isLoading && !isError && data.length === 0) {
        content = <Error message="No Videos Found!"></Error>
    } else {
        content = data?.map(item => <SingleVideo key={ item.id } video={ item }></SingleVideo>)
    }

    return (
        <>
            { content }
        </>
    );
};

export default Videos;
