import { createContext, useState, useContext } from "react";

const SubjectContext = createContext({
  name: null,
  setName: () => {},
  groups: null,
  setGroups: () => {}
});

export const useSubjectContext = () => useContext(SubjectContext);

export const AccountContextProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [groups, setGroups] = useState(null);

  return (
    <SubjectContext.Provider
      value={{
        name,
        setName,
        groups,
        setGroups,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};
