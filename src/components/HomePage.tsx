import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Subject } from "./Subject";
import { getSubjects } from "../api";
import { SubjectsProps } from "../types";
import { getRandomColor } from "../utils/randomColor";

function HomePage() {
  const [subjects, setSubjects] = useState<SubjectsProps[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSubjects();

        setSubjects(response.data);

        console.log("AL CARGAR LAS ASIGNATURAS", response);
      } catch (error) {
        console.log("ERROR AL TRAER LAS ASIGNATURAS", error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Header setRefresh={setRefresh} />

        <div className="flex gap-[20px] flex-wrap justify-center items-center content-center">
          {subjects.map(({ id, name, notas_count }) => (
            <Subject
              key={id}
              id={id}
              name={name}
              notas_count={notas_count}
              color={getRandomColor()}
              setRefresh={setRefresh}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
