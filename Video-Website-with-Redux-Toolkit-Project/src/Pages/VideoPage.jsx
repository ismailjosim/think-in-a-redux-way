import React from 'react';
import Player from '../components/Player/Player';
import Description from '../components/Description/Description';
import RelatedVideo from '../components/RelatedVideo/RelatedVideo';

const VideoPage = () => {
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <Player />
                        <Description />
                    </div>

                    {/*<!-- related videos -->*/ }
                    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                        {/*<!-- single related video -->*/ }
                        <RelatedVideo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoPage;
