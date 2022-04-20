import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query {
        me {
            _id
            username
            email
            haircuts {
                _id
                haircutText
                instructions
            }
        }
    }
`;

export const QUERY_USERS = gql`
    query {
        users {
            _id
            username
            email
            haircuts {
                haircutText
                instructions
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            haircuts {
                _id
                haircutText
                instructions
            }
        
        }
    }
`;

// query haircuts