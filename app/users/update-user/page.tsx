'use client';

import { userState } from '@/app/recoil/atoms';
import { useRecoilValue } from 'recoil';

export default function UpdatedUserPage() {
  const user = useRecoilValue(userState);

  // recoil 전역 상태 관리를 통해 값을 전역으로 받아올 수 있음.
  // 이 컴포넌트는 상태를 공유 받는 컴포넌트임. (UserUpdateClient는 데이터를 주는 컴포넌트)
  return (
    <div>
      <h1>Updated User Page</h1>
      <div>Updated User Name : {user.name}</div>
      <div>Updated User Email : {user.email}</div>
    </div>
  );
}
