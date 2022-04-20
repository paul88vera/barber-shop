import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            username
            email
            haircuts {
            _id
            haircutText
            instructions
            }
        }
        }
    }
`


export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                email
                haircuts {
                haircutText
                instructions
                } 
            }
        }
    }
`


export const ADD_HAIRCUT = gql`
    mutation addHaircut($haircutText: String!, $instructions: String) {
        addHaircut(haircutText: $haircutText, instructions: $instructions) {
            _id
            haircutText
            instructions
        }
    }
`

// export const DELETE_HAIRCUT = gql`

// `

// export const delete instructions