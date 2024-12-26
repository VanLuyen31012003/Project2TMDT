import React, { useState, useContext } from 'react';

// 1. Tạo Context ở ngoài bất kỳ hàm component nào
const MyContext = React.createContext();

// 2. Tạo Provider
const MyProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
