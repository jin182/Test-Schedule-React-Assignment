import { memo } from 'react';
import './ExamItem.css';

function ExamItem({ id, content, createDate, isDone, onUpdate, onDelete }) {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className="ExamItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            </div>
            <div
                className="title_col"
                style={{ textDecoration: isDone ? 'line-through' : 'none', color: isDone ? 'gray' : 'black' }}
            >
                {content}
            </div>
            <div className="date_col">{new Date(createDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default memo(ExamItem);
