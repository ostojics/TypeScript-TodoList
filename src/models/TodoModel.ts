class Todo {
    text: string;
    id: number;

    constructor(text: string) {
        this.text = text;
        this.id = Math.floor(Math.random() * 5);
    }
}

export default Todo;
