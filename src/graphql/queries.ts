import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query MyProfile {
    myProfile {
      id
      name
      avatar
    }
  }
`;
