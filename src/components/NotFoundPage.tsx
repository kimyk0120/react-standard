import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 50px;
`;

/**
 * Not Found
 */
const NotFoundPage = () =>{

    const navigate = useNavigate();

    // event
    const onBack = () => {
        navigate(-1);
    }

    // view
    return (
        <>
            <h1>Not Found</h1>
            <Button onClick={onBack}>Back</Button>
        </>
    );
}

export default NotFoundPage;
