import { createContext, useState, useContext } from "react";

const AllSubjectsContext = createContext({
  subjects: null,
  setSubject: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAllSubjectsContext = () => useContext(AllSubjectsContext);

export const AllSubjectsContextProvider = ({ children }) => {
  const [subjects, setSubject] = useState(null);

  return (
    <AllSubjectsContext.Provider
      value={{
        subjects,
        setSubject,
      }}
    >
      {children}
    </AllSubjectsContext.Provider>
  );
};
