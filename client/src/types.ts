// 定义代办事项的类型
export interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

export type TodoList = TodoItem[];
