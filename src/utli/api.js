const BASE_URL = "http://51.20.44.33:3000";

export const getImage = async (image) => {
  return BASE_URL + "/uploads/" + image;
};
export const getData = async (route) => {
  const response = await fetch(`${BASE_URL}${route}`);
  const resData = await response.json();
  return resData;
};

export const postForm = async (route, data, token) => {
  const response = await fetch(BASE_URL + route, {
    method: "POST",
    body: data,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();
  return resData;
};

export const updateData = async (route, data, token) => {
  const response = await fetch(BASE_URL + route, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();
  return resData;
};
export const deleteData = async (route, token) => {
  const response = await fetch(`${BASE_URL}${route}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();
  return resData;
};
