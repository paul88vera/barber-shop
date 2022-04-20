import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_HAIRCUT = gql`
  mutation addHaircut($haircutText: String!) {
    addHaircut(haircutText: $haircutText) {
      _id
      haircutText
      createdAt
      username
      instructions {
        _id
      }
    }
  }
`;

export const REMOVE_HAIRCUT = gql`
  mutation removeHaircut($id: ID!) {
    removeHaircut(id: $id) {
      _id
      username
      haircut {
        _id
        username
      }
    }
  }
`;