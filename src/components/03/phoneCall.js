const Wrapper = styled.section`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function PhoneCall() {
  return <section></section>;
}
