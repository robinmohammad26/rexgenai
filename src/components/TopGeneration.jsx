import PhotoCard from "./PhotoCard";

const TopGeneration = async () => {

    const res = await fetch('https://rexgenai.vercel.app/data.json');
    const photo = await res.json();
    const TopPhoto = photo.slice(0, 8);

    return (
        <div className="space-y-3 mt-5">
            <h2 className="text-3xl font-bold">Top Generation</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    TopPhoto.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGeneration;