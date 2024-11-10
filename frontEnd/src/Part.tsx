interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background";
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartRequirements extends CoursePartDescription {
  requirements: string[];
  kind: "special";
}

type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartDescription
  | CoursePartRequirements;

interface propsPart {
  coursePart: CoursePart;
}

const Part = ({ coursePart }: propsPart) => {
  switch (coursePart.kind) {
    case "basic":
      return (
        <div>
          <h4>
            {coursePart.name} {coursePart.exerciseCount}{" "}
          </h4>
          <p>{coursePart.description}</p>
        </div>
      );
    case "group":
      return (
        <div>
          <h4>
            {coursePart.name} {coursePart.exerciseCount}
          </h4>
          <p>project exercises: {coursePart.groupProjectCount}</p>
        </div>
      );
    case "background":
      return (
        <div>
          <h4>
            {coursePart.name} {coursePart.exerciseCount}
          </h4>
          <p>{coursePart.description}</p>
          <p>project exercises: {coursePart.backgroundMaterial}</p>
        </div>
      );
    case "special":
      return (
        <div>
          <h4>
            {coursePart.name} {coursePart.exerciseCount}
          </h4>
          <p>{coursePart.description}</p>
          <p>required skills: {coursePart.requirements.join(", ")}</p>
        </div>
      );
  }
};

export default Part;
