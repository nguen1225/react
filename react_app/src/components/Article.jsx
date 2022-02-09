import { useState } from "react";
import {Content, Title, PublishButton} from "./entryPoint";

const Article = (props) => {
    const [isPublished, setPublished] = useState(false)
    const publishArticle = () => {
        setPublished(true)
    }

    return (
        <div>
            <Title title = {props.title} />
            <Content content = {props.content} />
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
        </div>
    );
};

export default Article;