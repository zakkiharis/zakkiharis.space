import styled from "styled-components"

const NotReady = styled.div`
    color: #f5f5f7;
    font-weight: bold;
    position: fixed;
    right: -40px;
    top: 30px;
    justify-content: center;
    transform: rotate(45deg);
    background-color: #202020;
    padding: 5px 40px;
`

export default function Container({ children }) {

    return (
        <div>
            <div className="hidden lg:block">
                <NotReady className="dark:text-blackGray20 dark:bg-greenLantern">Development</NotReady>
            </div>
            <div className="container  mx-auto max-w-2xl">{children}</div>
        </div>
    )
}

