export interface IHelloWorld {
  text: string
}
export const Helloworld = ({ text }: IHelloWorld) => {
  return <div>This is test text: {text}</div>
}