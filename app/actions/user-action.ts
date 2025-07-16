'use server';
// server action
export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bob' },
  ];

  return DB.filter((user) => user.name.includes(name));
}
