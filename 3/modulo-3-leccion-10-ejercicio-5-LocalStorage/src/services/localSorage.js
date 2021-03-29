const set1 = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const get1 = key => {
    const localStorageData = localStorage.getItem(key);
    return JSON.parse(localStorageData);
  };
  
  export default {
    get2: get1,
    set2: set1
  };
  