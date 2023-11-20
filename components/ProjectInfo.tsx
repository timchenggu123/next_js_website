import CursorBlinker from "./Cursor";
export default function ProjectInfo({data, id}:{
    data: {
        title: string,
        institution: string,
        description: string,
        tech: string,
    },
    id:number
}) {
  return (
    <div className="flex flex-col max-w-[30vw] min-w-[30vw] h-fit min-h-screen justify-between p-10">
        <h1 className="text-4xl font-mono text-secondary-white my-3">{`#0${id}`}</h1>
        <div className="h-fit ml-10">
            <h1 className="text-4xl font-mono text-secondary-white my-3">{`<${data.title}>`}</h1>
            <h1 className="text-md font-mono text-secondary-white my-3">{`[${data.institution}]`}</h1>
            <h1 className="text-xl font-mono text-secondary-white">{data.description}<CursorBlinker size="md"/></h1>
        </div>
        <h1 className="text-lg font-mono font-bold text-secondary-white my-10">{data.tech}</h1>
    </div>
  )
}
