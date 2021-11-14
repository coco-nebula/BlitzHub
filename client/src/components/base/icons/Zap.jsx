import styled from "styled-components"

const Wrapper = styled.svg`
    height: 32px;
    width: 32px;
    margin-right: 6px;
`

const Zap = (props) => {
    return (
        <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
                fill="#ff79c6"
                d="M32.938 15.651C32.792 15.26 32.418 15 32 15H19.925L26.89 1.458c.219-.426.106-.947-.271-1.243C26.437.071 26.218 0 26 0c-.233 0-.466.082-.653.243L18 6.588 3.347 19.243c-.316.273-.43.714-.284 1.105S3.582 21 4 21h12.075L9.11 34.542c-.219.426-.106.947.271 1.243.182.144.401.215.619.215.233 0 .466-.082.653-.243L18 29.412l14.653-12.655c.317-.273.43-.714.285-1.106z"
            />
        </Wrapper>
    )
}

export default Zap