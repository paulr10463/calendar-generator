import { createContext, useState, useContext } from "react";

const AllSubjectsContext = createContext({
  subjects: null,
  setSubjects: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAllSubjectsContext = () => useContext(AllSubjectsContext);

export const AllSubjectsContextProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);

  return (
    <AllSubjectsContext.Provider
      value={{
        subjects,
        setSubjects,
      }}
    >
      {children}
    </AllSubjectsContext.Provider>
  );
};
