import * as React from 'react';
import { useCallback } from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { action } from 'mobx';
import { postStore, userStore } from './store';

const App = () => {
    const state = useLocalStore(() => ({
        name:'',
        password: '',
        onChangeName: action(function() {

        }),
        onChangePassword: action(function() {

        }),
    }))

    const onLogIn = useCallback(() => {
        userStore.logIn({
            nickname: 'gogo',
            password: '비밀번호',
        });
    },[]);

    const onLogout = useCallback(() => {
        userStore.logOut();
    },[])

    return useObserver(() => (
        <div>
            {userStore.isLoggingIn
                ? <div>로그인 중</div>
                : userStore.data
                    ? <div>{userStore.data.nickname}</div>
                    : '로그인 해주세요.'}
            {!userStore.data
                ? <button onClick={onLogIn}>로그인</button>
                : <button onClick={onLogout}>로그아웃</button>}
             <div>
                <input value={state.name} onChange={state.onChangeName} />
                <input value={state.password} type="password" onChange={state.onChangePassword} />
            </div>
        </div>
    ));
};

export default App;