import friends from "react";
import employ from "../TestJson/Test1.json";
import React, { Component } from "react";

const columnHeader = ["id", "name"];

class ChildComponet extends React.Component {
  generateHeader() {
    let res = [];
    for (var i = 0; i < columnHeader.length; i++) {
      res.push(<th id={columnHeader[i]}>{columnHeader[i]}</th>);
    }
    return res;
  }

  generateTableData() {
    let res = [];
    let tableData = employ.friends;
    for (var i = 0; i < tableData.length; i++) {
      res.push(
        <tr>
          <td key={tableData[i].id}>{tableData[i].id}</td>
          <td key={tableData[i].name}>{tableData[i].name}</td>
        </tr>
      );
    }
    return res;
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>{this.generateHeader()}</tr>
          </thead>
          <tbody>{this.generateTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default ChildComponet;
