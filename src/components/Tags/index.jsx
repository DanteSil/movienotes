import { Container } from "./styles";

export function Tags({title, datails, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}