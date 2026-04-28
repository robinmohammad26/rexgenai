import React from 'react';

const PhotoDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://rexgenai.vercel.app/data.json');
    const photos = await res.json();

    const photo = photos.find(p => p.id == id);

    return (
        <div>
            <h2 className='text-3xl font-bold'>Photo Details Page</h2>
            <div>
                <h2>{photo?.title}</h2>
                <h2>{photo?.prompt}</h2>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;