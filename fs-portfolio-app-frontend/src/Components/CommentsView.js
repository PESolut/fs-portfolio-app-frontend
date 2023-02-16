import CommentsViewItem from "./CommentsViewItem";
import CommentsNewForm from "./CommentsNewForm";

const CommentsView = ({comments}) => {
    console.log(comments)

    return (
        <>
        <h4>Comments</h4>
            <ul className="comments-list">
                {
                    comments.map(comment => <CommentsViewItem key={comment.id} comment={comment} id={comment.id}/>)         
                }
            </ul>
            <CommentsNewForm/>
        </>
    );
};

export default CommentsView;