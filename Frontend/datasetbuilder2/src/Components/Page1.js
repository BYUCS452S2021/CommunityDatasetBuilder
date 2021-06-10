import React from "react";
import {
  useState,
  useEffect,
  useContext,
  AppInfoContext,
  useLocation,
} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "./Table.js";
import Button from "react-bootstrap/Button";
import { get_data, get_names, get_options } from "./Resources";
import useForceUpdate from "use-force-update";

export const Page1 = (props) => {
  console.log("props", props);

  const data = get_data();
  const names = get_names();
  const options = get_options();

  console.log("data", data);
  console.log("names", names);
  console.log("options", options);

  function useSeamlessAppReload() {
    let appInfo = useContext(AppInfoContext);
    let location = useLocation();

    useEffect(() => {
      if (appInfo.currentVersion < appInfo.latestVersion) {
        window.location.reload();
      }
    }, [location.pathname]);
  }

  const [curDatasetName, setCurDatasetName] = useState("");
  const [curDataset, setCurDataset] = useState([]);

  const handleSelect = (e) => {
    setCurDatasetName(e);
    for (let i = 0; i < names.length; i++) {
      if (e === "#/" + names[i]) {
        setCurDataset(data[i]);
      }
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <h1>{curDatasetName.replace("#/", "")}</h1>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Datasets
        </Dropdown.Toggle>

        <Dropdown.Menu>{options}</Dropdown.Menu>
      </Dropdown>
      <div key={curDatasetName}>
        {curDataset.length > 0 ? (
          <Table data={curDataset} />
        ) : (
          <h5>Please Select Dataset from Dropdown</h5>
        )}
      </div>
      {/* 
      <Button variant="success" onClick={refreshPage()}>
        Upload
      </Button> */}
    </div>
  );
};

export default Page1;
