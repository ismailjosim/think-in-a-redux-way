import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from '../../features/api/apiSlice';
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";
import Error from '../ui/Error';
import PlayerLoader from '../ui/loaders/PlayerLoader';
import DescriptionLoader from '../ui/loaders/DescriptionLoader';
import RelatedVideoLoader from '../ui/loaders/RelatedVideoLoader';

export default function Video() {
    const { id } = useParams();
    const { data, isError, isLoading } = useGetVideoQuery(id);

    let content = null;
    if (isLoading) {
        content = <>
            <PlayerLoader />
            <DescriptionLoader />
        </>
    }

    if (!isLoading && isError) {
        content = <Error />
    }


    if (!isLoading && !isError && data?.id) {
        content = <>
            <Player link={ data.link } title={ data.title } />
            <Description data={ data } />
        </>
    }


    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        { content }
                    </div>

                    { data?.id ? <RelatedVideos /> : isLoading ? <RelatedVideoLoader /> : <Error /> }
                </div>
            </div>
        </section>
    );
}
