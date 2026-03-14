import './button.scss';

function Button ({children, onClick, size, style}) {

    const getStyles = () => {
        const styleArray = ['cmp-button'];
        size && styleArray.push(`cmp-button--${size}`);
        style && styleArray.push(`cmp-button--${style}`);
        return styleArray.join(' ')
    }

    return (
        <button className={getStyles()}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;