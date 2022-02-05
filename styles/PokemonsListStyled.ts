import styled from "@emotion/styled";

export const PokList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280rem, 1fr));
  grid-gap: 20rem;
  height: 100%;
  margin-bottom: 20rem;
`

export const PokContainer = styled.div`
  position: relative;
  min-height: 200rem;
  background: var(--base-pink);
  border-radius: 7rem;
  box-shadow: 1px 2px 3px hsl(0deg 0% 0% / 13%);
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &::before {
    content: "Click for details";
    background: rgba(11, 24, 57, 0.50);
    position: absolute;
    inset: 0;
    border-radius: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 22rem;
    text-transform: capitalize;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
      transition: opacity 300ms linear;
    }
  }
`

export const PokAbilities = styled.div`
  margin: 10rem;
`

export const PokAbility = styled.span`
  display: inline-block;
  background: var(--base-green);
  padding: 3rem 6rem;
  margin-bottom: 5rem;
  border-radius: 5rem;
  text-transform: capitalize;
  color: var(--dark-green);
  &:nth-of-type(even) {
    margin: 0 5rem;
  }
`

export const PokImage = styled.img`
  width: 65%;
  height: 100%;
  margin: 0 auto;
  object-fit: contain;
`

export const PokName = styled.p`
  font-size: 24rem;
  text-transform: capitalize;
  margin: 0 10rem 10rem 0;
  padding: 10rem 10rem 10rem 20rem;
  font-weight: 700;
  color: var(--white);
  background: var(--base-blue);
`