import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";

export interface ICustomerProps {
  data: any;
}

class Customer extends React.Component<ChildProps<{}, Response>, {}> {
  render() {
    const { data = {} } = this.props;
    console.log(data);
    return <div>Customer list</div>;
  }
}

const query = gql`
  {
    customer(id: "2") {
      id
      fullName
    }
  }
`;

export default graphql<{}, Response>(query)(Customer);
