import styled from "styled-components"

export const Section = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;
    justify-content: space-between;
`

export const CardHeader = styled.div`
    width: 100%;
    height: 20px;

    display: flex;
    flex-flow: row wrap;
`

export const TitleCard = styled.p`
    font-family: 'arial, consolas,"Roboto"', sans-serif;
    font-weight: 700;
    font-size: 1.0em;
    color: #FFFF;
`

export const CardChip = styled.div`
    width: 30px;
    height: 23px;

    & img {
        max-width: 100%;
    }
`

export const CardNumber = styled.div`
    width: 100%;
    height: 15px;
    /* border:1px solid blue; */

    span {
        font-family: "'Lato Hairline', Lato",sans-serif;
        font-weight: 500;
        font-size: 0.7em;
        color: #FFF;
        letter-spacing: 3px;
    }

    display: flex;
    align-items: center;
`

export const CardName = styled.div`
    width: 100%;
    height: 15px;
    /* border:1px solid blue; */

    span {
        font-family: "'Lato Hairline', Lato",sans-serif;
        font-weight: lighter;
        font-size: 0.7em;
        color: #FFF;
        letter-spacing: 0.7px;
    }

    display: flex;
    align-items: center;
`

export const CardDateValid = styled.div`
    width: 100%;
    height: 100%;
    /* border:1px solid blue; */

    span {
        font-family: "'Lato Hairline', Lato",sans-serif;
        font-weight: lighter;
        font-size: 0.5em;
        color: #FFF;
        letter-spacing: 0.7px;
    }


    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

`

// export const Content = styled.div`
//     width: 100%;
//     height: 300px;
//     margin:auto;
//     margin-top: 150px;
//     position: relative;
//     margin-bottom: 20px;

//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: center;
//     align-items: center;

//    img.background {
//         width: 450px;
//         height: 450px;
//         position: absolute;
//         right:150px;
//     }
// `

