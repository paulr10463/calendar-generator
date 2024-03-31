import { createContext, useState, useContext } from "react";

const GroupContext = createContext({
  subjectIndex: null,
  setSubjectIndex: () => { },
  groupIndex: null,
  setGroupIndex: () => { }
});

// eslint-disable-next-line react-refresh/only-export-components
export const useGroupContext = () => useContext(GroupContext);

export const GroupContextProvider = ({ children }) => {
  const [subjectIndexC, setSubjectIndexC] = useState(null);
  const [groupIndexC, setGroupIndexC] = useState(null);

  return (
    <GroupContext.Provider
      value={{
        subjectIndexC,
        setSubjectIndexC,
        groupIndexC,
        setGroupIndexC,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
