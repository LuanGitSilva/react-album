import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { Album as AlbumType } from '../types/Album';
import { PhotoItem } from '../components/PhotoItem';

export const Photos = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});

    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        }
    }, []);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        setTimeout( async ()=>{
            const photos = await api.getAllPhotos(id);
            setList( photos );
            setLoading(false);
        },1000);
    }

    const loadAlbumInfo = async (id: string) => {
        const albumInfo = await api.getAlbum(id);
        setAlbumInfo(albumInfo);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleBackButton}>
                VOLTAR
            </button>

            {loading &&
                <div>Carregando...</div>
            }

            <h1>{albumInfo.title}</h1>

            {list.map((item, index)=>(
                <PhotoItem
                    key={index}
                    data={item}
                />
            ))}
        </div>
    )
}