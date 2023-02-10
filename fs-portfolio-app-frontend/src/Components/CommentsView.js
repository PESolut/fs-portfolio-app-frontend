import CommentsViewItem from "./CommentsViewItem";

const CommentsView = ({comments}) => {
    console.log(comments)

    return (
        <>
        <h4>Comments</h4>
            <ul>
                {
                    comments.map(comment => <CommentsViewItem key={comment.id} comment={comment} id={comment.id}/>)         
                }
            </ul>
        </>
    );
};

export default CommentsView;