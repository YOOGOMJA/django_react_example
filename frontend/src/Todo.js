import React , { useEffect , useState }  from 'react';
import './todo.css';

import axios from 'axios';

function Todo(props) {
    const [list , setList] = useState([]);
    const [content , setContent] = useState('');

    // 데이터베이스에 관련된 함수만 모아둠 
    const db = {
        // 목록을 가져오는 함수 
        get : async ()=>{
            let result = await axios({
                url : 'http://localhost:8000/api/todo/',
                method : 'get'
            });
            if(result.status === 200){
                setList(result.data);
            }
        },
        // 추가하는 함수 
        add : async ()=>{
            let result = await axios({
                url : 'http://localhost:8000/api/todo/',
                method : 'post',
                data : {
                    context : content
                }
            });
            console.log(result);
            if(result.status >= 200 && result.status < 300){
                setContent('');
            }
            else{
                window.alert('등록이 실패했습니다.')
            }
        },
        // 삭제하는 함수 
        del : async (id)=>{
            let result = await axios({
                url : 'http://localhost:8000/api/todo/' + id + "/",
                method : 'delete'
            });
            
            if(result.status >= 200 && result.status < 300){
                setContent('');
            }
            else{
                window.alert('삭제가 실패했습니다.')
            }
        },
        // is_closed값을 바꾸는 함수 : 업데이트
        chk : async (item)=>{
            let result = await axios({
                url : 'http://localhost:8000/api/todo/' + item.id + "/",
                method : 'PUT',
                data :{
                    is_closed : !item.is_closed,
                    context : item.context
                }
            });
            
            if(result.status >= 200 && result.status < 300){
                setContent('');
            }
            else{
                window.alert('삭제가 실패했습니다.')
            }
        }
    }

    useEffect(()=>{
        db.get();
    },[]);

    const del = async (item) => {
        await db.del(item.id);
        await db.get();
    }
    const chk = async (item)=>{
        await db.chk(item);
        await db.get();
    }
    const add = async ()=>{
        await db.add();
        await db.get();
    }

    return (
        <div className="todo-container">
            <div className="todo-header">
                <h1>Todo Project</h1>
            </div>
            <div className="todo-input-wrapper">
                <div className="todo-input">
                    <input onChange={ e=>setContent(e.target.value) } value={ content } className="todo-txt" type='text' placeholder="입력하세요"></input>
                    <button type='button' className="btn todo-add" onClick={ add }>추가</button>
                </div>
            </div>
            <hr/>
            <div className="todo-list">
                <ul>
                    { list.map((item, index)=>{
                        return <li key={index}>
                            <p className={item.is_closed ? "todo-item-desc closed" :"todo-item-desc"}>{item.context}</p>
                            <button className='todo-item-btn chk' type='button' onClick={ ()=>chk(item) }>
                                {item.is_closed ? "취소" : "완료"}
                            </button>
                            <button className='todo-item-btn' type='button' onClick={ ()=>del(item) }>삭제</button>
                        </li>
                    }) }
                </ul>
            </div>
        </div>
    );
}

export default Todo;