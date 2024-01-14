import React, { useState, useEffect } from "react";
import Work from "../Components/Work";
import axios from "axios";
import "../CSS_Files/Work.css";

export default function PastWorks() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/");
      setData(response.data.Works); // Assuming that the array is inside a "Works" property
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the async function immediately
  }, []);

  console.log(data);

  return (
    <div className="PastWorksOverall">
      <h1>Projects</h1>

      <div className="PastWorks">
        {data.map((work, index) => (
          <Work key={index} title={work.title} url={work.image} />
        ))}
      </div>
    </div>
  );
}
