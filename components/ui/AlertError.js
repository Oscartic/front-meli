const AlertError = ({error}) => {
    return (
        <div className="alert_error">
            <p>⚠️ {error}</p>
        </div>
    );
}

export default AlertError;