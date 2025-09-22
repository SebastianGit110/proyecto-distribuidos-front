import { subjects } from "../data/exampleData";
import { Header } from "./Header";
import { Subject } from "./Subject";

function HomePage() {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Header />

        <div className="flex gap-[20px] flex-wrap justify-center items-center content-center">
          {subjects.map(({ subject_id, name, notesLength, color }) => (
            <Subject
              key={subject_id}
              subject_id={subject_id}
              name={name}
              notesLength={notesLength}
              color={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
