import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useRegisterMutation } from "../generated/graphql";

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        console.log("form Submited");
        const response = await register({
          variables: {
            email,
            password
          }
        });
        console.log(response);

        history.push("/");
      }}
    >
      <input
        value={email}
        placeholder="email"
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
