import styled from "styled-components"

const Load = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px dashed ${props => props.theme.color};
  animation: rotate 1s infinite linear;

  @keyframes rotate{
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(350deg);
    }
  }
`
export const Loader = () => {
  return (
    <Load>
    </Load>
  )
}
