import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../redux/features/relatedVideos/relatedVideosSlice';
import NotFound from '../../utils/NotFound';
import Loading from '../../utils/Loading';
import RelatedVideoItem from './RelatedVideoItem';

const RelatedVideo = ({ currentVideoId, tags }) => {



    const dispatch = useDispatch();
    const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos)

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }))
    }, [dispatch, tags, currentVideoId])




    // Decide what to render
    let content = null;
    if (isLoading) content = <Loading />;

    if (!isLoading && isError) content = <div className="col-span-12 text-center">{ error }</div>;

    if (!isLoading && !isError && relatedVideos?.length === 0) content = <NotFound />;

    if (!isLoading && !isError && relatedVideos?.length > 0) content = relatedVideos.map(video => <RelatedVideoItem key={ video.id } video={ video } />)

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            { content }
        </div>
    );
};

export default RelatedVideo;
