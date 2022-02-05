import styled from "@emotion/styled";

export const PokPanelWrapper = styled.div<{ status: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => props.status ? "flex" : "none"};
`

export const PokPanel = styled.div<{ status: boolean }>`
  width: 100%;
  max-width: ${props => props.status ? "390rem" : "0"};
  height: 100%;
  background: var(--light-pink);
  position: fixed;
  top: 0;
  right: 0;
  transition: max-width .5s linear;
  overflow-y: auto; 
  box-shadow: -2rem 0 7rem 0 hsl(0deg 0% 0% / 30%);
`

export const ClosePanel = styled.button`
  background: transparent;
  border: none;
  font-size: 34rem;
  font-family: var(--main-ff);
  cursor: pointer;
  position: absolute;
  top: 5rem;
  right: 5rem
`

export const PokDetails = styled.div`
  max-width: 93%;
  margin: 40rem auto;
`;

export const PokImage = styled.img`
  display: block;
  background: var(--base-pink);
  width: 70%;
  border-radius: 50%;
  padding: 10rem;
  margin: 0 auto;
`

export const PokName = styled.h3`
  font-size: 40rem;
  text-transform: capitalize;
  text-align: center;
  margin: 10rem 0;
`

export const PokTypes = styled.p`
  font-size: 18rem;
  text-transform: capitalize;
`
export const PokType = styled.span`
  display: inline-block;
  text-transform: capitalize;
  &:nth-of-type(even) {
    margin: 0 5rem;
  }
`
export const PokeListInfo = styled.p`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10rem;
`

const bulletStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  width: 100%;
  height: 36rem;
  font-size: 13rem;
  text-transform: capitalize;
`

export const PokStat = styled(bulletStyle)`
  background: var(--base-blue);
  color: var(--white);
`

export const PokMove = styled(bulletStyle)`
  background: var(--base-green);
  color: var(--dark-green);
`