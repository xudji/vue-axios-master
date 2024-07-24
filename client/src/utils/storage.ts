export const getStorage = (key: string) => {
  const storage = localStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage);
  } else {
    return "";
  }
};

export const setStorage = (key: string, val: any) => {
  if (!val) {
    console.error("setStorage必须传入有效的val值");
    return;
  }
  if (typeof val === "object") {
    localStorage.setItem(key, JSON.stringify(val));
  } else {
    localStorage.setItem(key, val);
  }
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};
