import Form from "@components/Form"
import List from "@components/List"
import React from "react"

import { Container } from "./styles"

const Layout: React.FC = () => {
  return (
    <Container>
      <Form />
      <List />
    </Container>
  )
}

export default Layout
