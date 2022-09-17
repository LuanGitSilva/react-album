import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo as PhotoType } from '../types/Photo';

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photoInfo, setPhotoInfo] = useState<PhotoType>();

    useEffect(() => {
        if(params.id) {
            loadPhoto(params.id);
        }
    }, []);

    const loadPhoto = async (id: string) => {
        setLoading(true);
        setTimeout( async ()=>{
            const photo = await api.getPhoto(id);
            setPhotoInfo( photo );
            setLoading(false);
        },1000);    
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            {loading &&
                <div>Carregando...</div>
            }

            {photoInfo &&
                <>
                    <button onClick={handleBackButton}>VOLTAR</button>
                    <p>{photoInfo.title}</p>
                    <img src={photoInfo.url} alt={photoInfo.title} />
                </>
            }
        </div>
    )
}