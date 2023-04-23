import React from 'react';
import Video from '../SingleVideo/SingleVideo';

const Videos = () => {
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {/* <!-- single video --> */ }
                    {
                        [0, 1, 3, 4, 5, 6, 7].map((index) => <Video key={ index }></Video>)
                    }


                    { /*<div className="col-span-12">some error happened</div>*/ }
                </div>
            </section>
        </section>
    );
};

export default Videos;
