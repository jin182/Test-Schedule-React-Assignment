import React, { useMemo, useState } from 'react';
import './ExamList.css';
import ExamItem from './ExamItem';
import { memo } from 'react';

const ExamList = React.memo(({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearchResult = useMemo(() => {
        if (search === '') {
            return todos;
        }
        return todos.filter((item) => item.content.toLowerCase().includes(search.toLowerCase()));
    }, [search, todos]);

    const analyzeTodo = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((item) => item.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    return (
        <div className="ExamList">
            <h4>시험 과목 목록</h4>
            <div>
                <div>총 개수: {totalCount}</div>
                <div>완료된 일: {doneCount}</div>
                <div>미완료된 일: {notDoneCount}</div>
            </div>
            <input
                type="text"
                className="searchbar"
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요 .."
            />
            <div className="list_wrapper">
                {getSearchResult.map((item) => (
                    <ExamItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
});

export default memo(ExamList);
