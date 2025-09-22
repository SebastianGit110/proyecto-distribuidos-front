export type SubjectsProps = {
  subject_id: string;
  name: string;
  notesLength: number;
  color?: string;
};

export type NotesProps = {
  note_id: string;
  subject_id: string;
  type: string;
  content: string;
  image_url: string;
};
