import classNames from "classnames";

type Props = {
  index: number;
  onClick(event: any): void;
  player: string;
};

function Square({ index, onClick, player }: Props) {
  return (
    <div
      data-cell-index={index}
      className="h-36 border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center cursor-pointer transition duration-500 hover:scale-105 transform"
      onClick={onClick}
    >
      <span
        data-cell-index={index}
        className={classNames(
          "transform transition-all duration-150 ease-out",
          player ? "scale-100" : "scale-0",
          player === "X" ? "text-yellow-200" : "text-fuchsia-300"
        )}
      >
        {player}
      </span>
    </div>
  );
}

export default Square;
