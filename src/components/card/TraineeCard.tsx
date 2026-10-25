import type { Trainee } from "../../types/trainee.type";

function TraineeCard({ firstName, lastName, username }: Trainee) {
  return (
    <div className="bg-amber-600 text-green-900 border rounded-b-md shadow-md">
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{username}</h2>
    </div>
  );
}

export default TraineeCard;
