'use client';

import { userState } from '@/app/recoil/atoms';
import Link from 'next/link';
import { useRecoilState } from 'recoil';

export default function UserUpdateClient() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      <div>
        <h1>update user page</h1>
        <input
          type="email"
          placeholder="이메일을 작성해주세요!"
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="이름을 넣어주세요!"
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <Link href="/users/update-user">업데이트된 페이지로 이동하기</Link>
    </>
  );
}
