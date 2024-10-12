const Content = (courseParts) =>
  courseParts.map((coursePart) => (
    <p>
      {coursePart.name} {coursePart.exerciseCount}
    </p>
  ));

export default Content;
