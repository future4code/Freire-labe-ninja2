import React from "react";
import axios from "axios";

class JobsList extends React.Component {
  state = {
    lista: [],
  };

  funcaoJobs = () => {
    this.getJobs();
  };

  getJobs = () => {
    debugger;
    const request = axios
      .get("https://labeninjas.herokuapp.com/jobs", {
        headers: { Authorization: "2d88d553-bd93-447d-871c-2849315c7ded" },
      })
      .then((response) => {
        this.setState({ lista: response.data.jobs });
        console.log(this.state.lista);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    const listJobs = this.state.lista.map((job) => {
      return <div>{job.title}</div>;
    });

    console.log(this.state.lista);
    return <div>{listJobs}</div>;
  }
}

export default JobsList;
