import { gql } from '@apollo/client';

export const ADD_CASE = gql`
mutation addCase(
  $first_name: String!, 
  $last_name: String!,
  $description: String,
  $client_first_name: String!,
  $client_last_name: String!,
  $client_email: String,
  $client_phone: String,
  ) {
  addCase(
    first_name: $firstName, 
    last_name: $lastName,
    description: $description,
    client_first_name: $clientFirstName,
    client_last_name: $clientLastName, 
    client_email: $clientEmail,     
    client_phone: $clientPhone, 
    ) {
    case {
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
}
`;

export const REMOVE_CASE = gql`
mutation removeCase($caseId: ID!) {
  removeCase(caseId: $caseId) {
    case {
      _id
      first_name
      last_name
      description
      client_first_name
      client_last_name
      client_email
      client_phone
  }
}
`;

export const ADD_NOTE = gql`
mutation addNote($note_text: String!, $note_date: String!) {
  addNote(note_text: $noteText, note_date: $noteDate) {
    _id
    note_text
    note_date
  }
}
`;

export const REMOVE_NOTE = gql`
mutation removeNote($noteId: ID!) {
  removeNote(noteId: $noteId) {
    _id
    note_text
    note_date
  }
}
`;