import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ajais-25")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers : {data.followers}
      </div>
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </>
  );
};

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ajais-25");
  return response.json();
};
