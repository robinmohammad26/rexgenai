import PhotoCard from "@/components/PhotoCard";


const AllPhotoPage = async () => {

    const res = await fetch('https://rexgenai.vercel.app/data.json');
    const allPhoto = await res.json();


    return (
        <div>
            <h2 className="text-3xl font-bold my-8">All Photos</h2>
            <div className="grid grid-cols-4 gap-3">
                {allPhoto.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default AllPhotoPage;