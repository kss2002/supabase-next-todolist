'use server';

const TODOS: string[] = [];

export async function getTodos() {
  return TODOS;
}

export async function createTodo(data: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  TODOS.push(data);
  return TODOS;
}
