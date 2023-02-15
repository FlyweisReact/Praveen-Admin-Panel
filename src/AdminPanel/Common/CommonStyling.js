import styled from 'styled-components'

// <-------------- Daily-Request--------------------->
export const ContainerS = styled.div`
    width: 100%;
    margin: 70px 0 0 0 ;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 70px);
    padding :20px ;
    ::-webkit-scrollbar {
    width: 7px;
    }

    ::-webkit-scrollbar-track {
        background-color: darkgrey;
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
`
export const DailyRequestHeader = styled.div`
    margin: 10px 0;
    font-size: 1.1rem;
    font-weight: 600;
`
//<---------------------