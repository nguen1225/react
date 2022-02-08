import {Content,Title} from "./entryPoint";

const Article = (props) => {
    return (
        <div>
            <Title title = {props.title} />
            <Content content = {props.content} />
        </div>
    );
};

export default Article;