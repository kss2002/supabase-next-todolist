'use client';

import { useEffect, useState } from 'react';
import { searchUsers } from '../actions/user-action';

export default function UsersPage() {
  const [users, Setusers] = useState([]);

  useEffect(() => {
    searchUsers('Alice').then((data) => Setusers(data));
  }, []);

  return (
    <>
      <main>
        <h1>users</h1>

        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </main>
    </>
  );
}
