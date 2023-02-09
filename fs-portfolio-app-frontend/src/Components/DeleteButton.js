const DeleteButton = ({ text, onClick, style, className }) => {
    return (
        <button type='button' style={style} className={className} onClick={onClick}>
            {text}
        </button>
    );
};

export default DeleteButton;