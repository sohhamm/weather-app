import {Container} from './style.css'

interface ILayout {
  children: JSX.Element[] | JSX.Element
}

export default function Layout({children}: ILayout) {
  return <Container>{children}</Container>
}
