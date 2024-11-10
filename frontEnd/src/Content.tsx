import Part from "./Part";

interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = ({ courseParts }: ContentProps) => {
  return (
    <div>
      {courseParts.map((coursePart) => (
        <Part key={coursePart.name} coursePart={coursePart} />
      ))}
    </div>
  );
};

// const Content = ({ courseParts }: ContentProps) => {
//   return (
//     <div>
//       {courseParts.map((coursePart) => (
//         <p key={coursePart.name}>
//           {coursePart.name} {coursePart.exerciseCount}
//         </p>
//       ))}
//       <Part />
//     </div>
//   );
// };

export default Content;
