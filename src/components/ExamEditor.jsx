import React, { useRef, useState } from 'react';
import './ExamEditor.css';
import { memo } from 'react';

const ExamEditor = React.memo(({ onCreate }) => {
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onChangeDate = (e) => {
        setDate(e.target.value);
    };

    const onSubmit = () => {
        if (!content || !date) {
            inputRef.current.focus();
            return;
        }
        onCreate(content, new Date(date).getTime());
        setContent('');
        setDate('');
        inputRef.current.focus();
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <div className="ExamEditor">
            <h4>시험일 등록하기</h4>
            <div className="editor_wrapper">
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="시험 과목 등록하기 .."
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                />
                <select value={date} onChange={onChangeDate}>
                    <option value="">날짜 선택</option>
                    <option value="2024-10-16">10월 16일 2024</option>
                    <option value="2024-10-17">10월 17일 2024</option>
                </select>
                <button className="addBtn" onClick={onSubmit}>
                    추가
                </button>
            </div>
        </div>
    );
});

export default memo(ExamEditor);
