import { List } from "./List";
import "../components/Child";

const Child = () => {
    return (
        <div className="component">
            <h3>Hello Component</h3>
            <List />
        </div>
    );
};

export default Child;