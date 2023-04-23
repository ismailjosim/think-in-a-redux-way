import React, { useEffect } from 'react';
import SingleVideo from './SingleVideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../redux/features/videos/videosSlice';
import Loading from '../../utils/Loading';
import NotFound from '../../utils/NotFound';


const Videos = () => {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector(state => state.videos)

    useEffect(() => {
        dispatch(fetchVideos())

    }, [dispatch])


    // decide what to render
    let content;

    if (isLoading) content = <Loading />

    if (!isLoading && isError) content = <div className="col-span-12 text-center">{ error }</div>

    if (!isLoading && !isError && videos?.length === 0) content = <NotFound />

    if (!isLoading && !isError && videos?.length > 0) content = videos.map((item, index) => <SingleVideo key={ index } item={ item }></SingleVideo>)

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">{ content }</div>
            </section>
        </section>
    );
};

export default Videos;
