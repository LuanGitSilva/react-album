import { useState, useEffect } from "react";
import { Album } from '../types/Album';
import { api } from '../api';
import { AlbumItem } from "../components/AlbumItem";

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [albums, setAlbums] = useState<Album[]>([]);
    
    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoading(true);
        const albums = await api.getAllAlbums();
        setAlbums( albums );
        setLoading(false);
    }

    return (
        <div>          
            {loading &&
                <div>Carregando...</div>
            }

            {!loading && 
                <>
                    {albums.map((item, index) => (
                        <AlbumItem 
                            key={index}
                            id={item.id}
                            title={item.title}
                        />
                    ))}
                </>
            }          
        </div>
    )
}