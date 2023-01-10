import styles from './CardForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';

const CardForm = props => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const id = useSelector(state => String(state.cards.length + 1));
    const isFavorite = false;
    
    const handleSubmit = e => {
        const columnId = String(props.columnId);
        e.preventDefault();
        dispatch(addCard({ title, columnId, id, isFavorite }));
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.card}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Column</Button>
        </form>
    );
};

export default CardForm