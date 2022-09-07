// import React, { Component } from "react";
// import Header from "./header";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import { Link, Navigate, Routes, Route, useNavigate } from "react-router-dom";
// import "./dashboard.css";
// import withRouter from "./withRouter.jsx";
// import FillResponse from "./FillResponse";
// import ViewResponses from "./ViewResponses.jsx";
// import { Grid } from "@mui/material";

// class Dashbaord extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formsCreatedByYou: [
//         { id: 1, description: "Form 1", status: "View" },
//         { id: 2, description: "Form 2", status: "View" },
//         { id: 3, description: "Form 3", status: "View" },
//       ],
//       formsForYou: [
//         { id: 1, description: "Form 1", filled: true },
//         { id: 2, description: "Form 2", filled: false },
//         { id: 3, description: "Form 3", filled: true },
//         { id: 4, description: "Form 4", filled: false },
//       ],
//     };
//     this.fillResponse = this.fillResponse.bind(this);
//   }

//   // const navigate=useNavigate();

//   fillResponse(param) {
//     console.log(param);
//     // this.navigate('/fill-response')

//     // this.props.navigation.navigate('dashboard')

//     // console.log("fill response clicked")
//     // this.props.navigate("/fill-response");
//   }
//   render() {
//     return (
//       <>
//         <Header />

//         <Grid container style={{ paddingTop: "20px", alignItems: "center" }}>
//           <Grid item xs={6} style={{ paddingLeft: "50px" }}>
//             <h1>Hello User</h1>
//           </Grid>
//           <Grid item xs={6} style={{ paddingLeft: "50px" }}>
//             <Button variant="primary" size="lg">
//               <Link className="link" to={"/create-form?user_id=" + "5"}>
//                 Create a Form
//               </Link>
//             </Button>
//           </Grid>
//         </Grid>
//         <div>
//           <div className="float-child">
//             <h2>Forms Created by You</h2>
//             <hr className="hr-css" />

//             <Table striped hover>
//               <thead>
//                 <tr>
//                   <th>First Name</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.formsCreatedByYou.map((formByYou) => (
//                   <tr key={formByYou.id}>
//                     <td>{formByYou.description}</td>
//                     <td>
//                       <Button
//                         variant="primary"
//                         href={"./view-responses?form_id=" + formByYou.id}
//                       >
//                         {formByYou.status}
//                       </Button>{" "}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//           <div className="float-child">
//             <h2>Forms for You</h2>
//             <hr className="hr-css" />

//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>First Name</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.formsForYou.map((formForYou, index) => {
//                   return formForYou.filled ? (
//                     <tr key={formForYou.id}>
//                       <td>{formForYou.description}</td>
//                       <td>
//                         <Button
//                           key={index}
//                           variant="success"
//                           onClick={() => this.fillResponse(formForYou)}
//                           href={
//                             "/your-responses?response_id=" + "65"
//                           }
//                         >
//                           View Response
//                         </Button>{" "}
//                       </td>
//                     </tr>
//                   ) : (
//                     <tr key={formForYou.id}>
//                       <td>{formForYou.description}</td>
//                       <td>
//                         <Button
//                           key={index}
//                           variant="primary"
//                           onClick={() => this.fillResponse(formForYou)}
//                           href={
//                             "/fill-response?user_id=" +
//                             formForYou.id +
//                             "&form_id=" +
//                             formForYou.id
//                           }
//                         >
//                           Fill Response
//                         </Button>{" "}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </Table>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default withRouter(Dashbaord);

import React, { Component } from "react";
import Header from "./header";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, Navigate, Routes, Route, useNavigate } from "react-router-dom";
import "./dashboard.css";
import withRouter from "./withRouter.jsx";
import FillResponse from "./FillResponse";
import ViewResponses from "./ViewResponses.jsx";
import { Grid } from "@mui/material";
import DataService from "./DataService";
import { ContactSupport, ThirtyFpsSelect } from "@mui/icons-material";

class Dashbaord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 4,
      createdByUser: [],
      filledByUser: [],
      notFilledByUser: [],
      ids: [],
      // formsCreatedByYou: [],
      formsForYou: [
        { id: 1, description: "Form 1", filled: true },
        { id: 2, description: "Form 2", filled: false },
        { id: 3, description: "Form 3", filled: true },
        { id: 4, description: "Form 4", filled: false },
      ],
    };
    this.fillResponse = this.fillResponse.bind(this);
  }

  fillResponse(param) {
    // console.log(param);
  }

  componentDidMount() {
    DataService.dashboardCreatedByForms().then((response) => {
      this.setState({
        createdByUser: response.data.createdByUser,
        filledByUser: response.data.filledByUser,
        notFilledByUser: response.data.notFilledByUser,
      });
    });
  }

  render() {
    console.log(this.state.filledByUser);
    return (
      <>
        <Header />

        <Grid container style={{ paddingTop: "20px", alignItems: "center" }}>
          <Grid item xs={6} style={{ paddingLeft: "50px" }}>
            <h1>Hello User </h1>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "50px" }}>
            <Button variant="primary" size="lg">
              <Link className="link" to={"/create-form?user_id=" + "5"}>
                Create a Form
              </Link>
            </Button>
          </Grid>
        </Grid>
        <div>
          <div className="float-child">
            <h2>Forms Created by You</h2>
            <hr className="hr-css" />
            <Table striped hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.createdByUser.map((created) => {
                  return (
                    <tr key={created.id}>
                      <td>{created.name}</td>
                      <td>
                        <Button
                          onClick={this.viewFormCreatedByYou}
                          variant="primary"
                          href={"./viewreport?form_id=" + created.id}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <div className="float-child">
            <h2>Forms for You</h2>
            <hr className="hr-css" />

            <Table striped>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filledByUser.map((form) => {
                  return (
                    <tr key={form.id}>
                      <td>{form.name}</td>
                      <td>
                        <Button
                          key={form.id}
                          variant="success"
                          href={
                            "/your-responses?response_id=" +
                            form.id 
                          }
                        >
                          View Response
                        </Button>{" "}
                      </td>
                    </tr>
                  );
                })}

                {this.state.notFilledByUser.map((form) => {
                  return (
                    <tr key={form.id}>
                      <td>{form.name}</td>
                      <td>
                        <Button
                          key={form.id}
                          variant="primary"
                          href={
                            "/fill-response?user_id=" +
                            "1"+
                            "&form_id=" +
                            form.id
                          }
                        >
                          Fill Response
                        </Button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dashbaord);
