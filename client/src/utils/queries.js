import { gql } from '@apollo/client';

export const QUERY_CASES = gql`
  query allCases {
    cases {
      _id
      first_name
      last_name
      description
      notes {
        note_text
        note_date
      }
      client_first_name
      client_last_name
      client_email
      client_phone
    }
  }
`;

export const QUERY_SINGLE_CASE = gql`
  query singleCase($caseId: ID!) {
    case(caseId: $caseId) {
      _id
      first_name
      last_name
      description
      notes {
        note_text
        note_date
      }
      client_first_name
      client_last_name
      client_email
      client_phone
    }
  }
`;

export const QUERY_NOTES = gql`
    query allNotes {
        allNotes {
          _id
          note_text
          note_date
        }
    }    
`

export const QUERY_SINGLE_NOTE = gql`
    query singleNote($noteId: ID!) {
        note(noteId: $noteId) {
          _id
          note_text
          note_date
        }
    }    
`