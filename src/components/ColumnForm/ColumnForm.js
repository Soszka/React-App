import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();
    const id = useSelector(state => String(state.columns.length + 1));
    const listId = props.listId;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId, id }));
        setTitle('');
        setIcon('');
     };

	return (
        <form onSubmit={handleSubmit} className={styles.column}>
            Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add Column</Button>
        </form>
	);
};

export default ColumnForm