
import Page from "./Page";

// const Page = dynamic(() => import("./my_microfrontend/Page"));

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.s app!</h1>
      <Page />
    </div>
  );
}
