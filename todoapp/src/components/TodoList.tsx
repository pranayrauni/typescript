import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";


type TodoListProps = {
    items: {id: string, text: string}[];
    onRemoveTodo: (todoId: string) => void;
}

const TodoList : React.FC<TodoListProps> = (props) => {
  

  return (
    <div className="grid md:grid-cols-5 gap-3 my-5">
        {
            props.items.map((todo) => (
                <Card key={todo.id}>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>
                            {todo.text}
                        </CardTitle>
                        <Button onClick={() => props.onRemoveTodo(todo.id)} variant={"destructive"} size={"icon"} ><Trash2/></Button>
                    </CardHeader>
                </Card>
            ))
        }
    </div>
  )
}

export default TodoList