import TodoItem from "../TodoItem/TodoItem";
import type { TTodo } from "@/app/types/Todo";

type TTodoListProps = {
    todos: TTodo[],
    setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>
}

export default function TodoList ({ todos, setTodos }: TTodoListProps) {
    let content;
    if (todos.length === 0) {
        content = <p>No Todos Available</p>;
    } else {
        const sortedTodos = todos.sort((a, b) => b.id - a.id);

        content = (
            <>
                {sortedTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                ))}
            </>
        );
    }

    return content
}

