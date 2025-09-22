export const CalendarIcon = ({ color }: { color: string }) => (
  <svg
    className={`w-10 h-10 ${color} text-muted-foreground p-2 rounded-md`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 1v4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 1v4"
    />
  </svg>
);

export const EditIcon = ({
  handleEdit,
}: {
  handleEdit: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    onClick={handleEdit}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652l-9.193 9.193a4.5 4.5 0 01-1.897 1.13l-3.07.878a.75.75 0 01-.928-.928l.878-3.07a4.5 4.5 0 011.13-1.897l9.193-9.193z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 7.125L16.862 4.487"
    />
  </svg>
);

export const DeleteIcon = ({
  handleDelete,
}: {
  handleDelete: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    onClick={handleDelete}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const AddSubject = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);
