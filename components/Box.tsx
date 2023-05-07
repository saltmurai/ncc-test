export type BoxProps = {
  title?: string;
  content: string;
  imagePath: string;
};

export default function Box({ title, content, imagePath }: BoxProps) {
  return (
    <>
      <div>
        <span className="text-center font-bold text-lg">{title}</span>
        <div>
          <img src={imagePath} className="float-left"></img>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
