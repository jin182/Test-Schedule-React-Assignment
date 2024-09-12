import { useReducer, useRef, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import ExamEditor from './components/ExamEditor';
import ExamList from './components/ExamList'; // 수정: ExamList로 이름 변경

const initialTodos = [];

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE': {
            return [...state, action.newItem];
        }
        case 'UPDATE': {
            return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
        }
        case 'DELETE': {
            return state.filter((item) => item.id !== action.targetId);
        }
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const idRef = useRef(0);

    const onCreate = (content, date) => {
        dispatch({
            type: 'CREATE',
            newItem: {
                id: idRef.current,
                content,
                isDone: false,
                createDate: date,
            },
        });
        idRef.current += 1;
    };

    const onUpdate = useCallback((targetId) => {
        dispatch({ type: 'UPDATE', targetId });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({ type: 'DELETE', targetId });
    }, []);

    return (
        <div className="App">
            <Header />
            <ExamEditor onCreate={onCreate} />
            <ExamList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
