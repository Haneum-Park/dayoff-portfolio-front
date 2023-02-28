import styled from 'styled-components';

export const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: width 0.5s;
  width: 3rem;
  height: 2rem;
  border: 1px solid var(--color-gray-4);
  border-radius: 0.5rem;
  background-color: var(--color-gray-2);
  overflow: hidden;

  > div:not(.current-locale) {
    color: var(--color-gray-5);
    &:hover {
      color: var(--color-gray-9);
    }
  }

  > div.current-locale {
    color: var(--color-gray-9);
  }

  &.active {
    width: 10rem;
    transition: width 0.5s;
    > div {
      cursor: pointer;
    }
  }

  .hidden {
    display: none;
    opacity: 0;
  }

  .appear {
    animation: flabIn 0.5s forwards;
    display: initial;
  }

  .disappear {
    animation: flabOut 0.5s forwards;
  }

  @keyframes flabIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flabOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;