import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    id: number;
    title: string;
}

export const AlbumItem = ({ id, title }: Props) => {
    return (
        <div className='albumGeral'>
            <Link to={`/album/${id}`} className="album">
                {title}
            </Link>
        </div>
    );
}