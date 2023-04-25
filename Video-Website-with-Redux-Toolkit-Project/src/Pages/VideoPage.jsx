import React, { useEffect } from 'react';
import Player from '../components/VideoPage/Player';
import Description from '../components/VideoPage/Description';
import RelatedVideo from '../components/VideoPage/RelatedVideo';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideo } from '../redux/features/video/videoSlice';
import Loading from '../utils/Loading';
import NotFound from '../utils/NotFound';


const VideoPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { video, isLoading, isError, error } = useSelector(state => state.video)

    useEffect(() => {
        dispatch(fetchVideo(id))
    }, [id, dispatch])


    // What to render
    let content = null;
    if (isLoading) content = <Loading />

    if (!isLoading && isError) content = <div className="col-span-12 text-center">{ error }</div>

    if (!isLoading && !isError && !video?.id) content = <NotFound />

    if (!isLoading && !isError && video?.id) content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player link={ video.link } title={ video.title } />
            <Description video={ video } />
        </div>
        <RelatedVideo currentVideoId={ id } tags={ video.tags } />

    </div>



    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                { content }
            </div>
        </section>
    );
};

export default VideoPage;
/*
id
title
description
author
avatar
date
duration
views
link
thumbnail
tags
likes
unlikes
*/
