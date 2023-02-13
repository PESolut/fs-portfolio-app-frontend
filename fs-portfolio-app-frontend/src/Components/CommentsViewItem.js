import React from 'react';

const CommentsViewItem = ({comment, id}) => {
    console.log(comment)
    const { time, date } = comment

    return (
        <>
            <li>
                time: {time} date: {date} comment: {comment.comment}
            </li>
        </>
    );
};

export default CommentsViewItem;