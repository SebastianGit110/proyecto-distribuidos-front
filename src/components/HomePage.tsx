import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Subject } from "./Subject";
import { getSubjects } from "../api";
import { SubjectsProps } from "../types";
import { getRandomColor } from "../utils/randomColor";

function HomePage() {
  const [subjects, setSubjects] = useState<SubjectsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSubjects();

      setSubjects(response.data);
      console.log("AL CARGAR LAS ASIGNATURAS", response);
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Header />

        <div className="flex gap-[20px] flex-wrap justify-center items-center content-center">
          {subjects.map(({ id, name, notas_count }) => (
            <Subject
              key={id}
              id={id}
              name={name}
              notas_count={notas_count}
              color={getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
