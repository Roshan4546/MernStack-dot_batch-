import { useNavigate } from 'react-router-dom';

function Labs() {
    const navigate = useNavigate(); // Call useNavigate at the top level

    const changeHandler = () => {
        // Use the navigate function inside the event handler
        navigate('/about');
    };
    function back() {
        navigate(-1);
    }
    return (
        <div>
            <button onClick={changeHandler}>Go to About page</button>
            <button onClick={back}>back</button>
        </div>
    );
}

export default Labs;
