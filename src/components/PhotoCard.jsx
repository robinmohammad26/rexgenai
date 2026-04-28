import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaDownload, FaHeart } from "react-icons/fa";


const PhotoCard = ({photo}) => {

    return (
        <Card className="border">
            <div className="relative w-full aspect-square">
                <Image 
                    src={photo.imageUrl}
                    fill
                    alt="AI Photo"
                    className="object-cover rounded-xl"
                />
                <Chip className="absolute right-1 top-2">{photo.category}</Chip>
            </div>
            <div>
                <h2 className="text-xl font-bold">{photo.title}</h2>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <p><FaHeart /></p>
                    <p>{photo.likes}</p>
                </div>
                {/* <Separator></Separator> */}
                <div className="flex items-center gap-2">
                    <p><FaDownload /></p>
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Button variant="outline" className='w-full'>View Details</Button>
        </Card>
    );
};

export default PhotoCard;