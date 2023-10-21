import { FormGroup, Input, Label, Form, Button } from "reactstrap";
import { useState } from "react";
function PasswordResetFrom() {
  const [ResetPass, setResetPass] = useState([]);
  const [ResetCPass, setResetCPass] = useState([]);
  const [ReEmail, setReEmail] = useState([]);
  const [pages, setpages] = useState(false);

  async function postData() {
    console.log(ReEmail + ResetPass + ResetCPass);
    if (ResetPass == ResetCPass) {
      console.log("Password  matched");

      const response = await fetch("https://b46-we-node-fw15.onrender.com/forgotpassword/" + ReEmail, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Password: ResetPass
        }),
      });

      response.json().then(data => {
  console.log(JSON.stringify(data));
});
        
    } else {
      console.log("Password not matched");
      setpages(true);
      console.log("Password not matched" + pages);
    }
  }

  return (
    <Form>
      <h1> Password Reset Link </h1>
      <FormGroup>
        <Label for="exampleEmail" hidden>
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => setReEmail(e.target.value)}
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setResetPass(e.target.value)}
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Confirm Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setResetCPass(e.target.value)}
        />
      </FormGroup>{" "}
      <Button color="info" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
}

export default PasswordResetFrom;
