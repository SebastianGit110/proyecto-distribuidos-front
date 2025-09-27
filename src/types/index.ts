export type SubjectsProps = {
  id: string;
  name: string;
  notas_count: number;
  color?: string;
};

export type NotesProps = {
  note_id: string;
  subject_id: string;
  type: string;
  content: string;
  image_url: string;
};

export type SignupI = {
  username: string;
  email: string;
  password_hash: string;
  created_at: Date;
};

export type LoginI = {
  username: string;
  password: string;
};
