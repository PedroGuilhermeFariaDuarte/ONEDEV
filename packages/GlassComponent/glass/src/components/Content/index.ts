import styled from "styled-components"

export default styled.div`
    width: 100%;
    height: 300px;
    margin:auto;
    margin-top: 150px;
    position: relative;
    margin-bottom: 20px;

    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;

   img.background {
        width: 450px;
        height: 450px;
        position: absolute;
        right:150px;

        &:nth-child(2n) {
            right: 0px;
            left: 150px;
            top: 180px;
        }

        &:nth-child(3n-1) {
            top: 520px;
        }


    }
`
