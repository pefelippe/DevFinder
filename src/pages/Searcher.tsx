import Form from "../components/Form";
import UserCard from "../components/UserCard";

function Searcher() {
  return (
    <div className="min-h-screen w-full flex  justify-center p-20 bg-gray-950">
      <div className="max-w-5xl w-full mx-auto items-center flex flex-col gap-20">
        <h1 className="font-bold text-3xl text-slate-50 tracking-tighter">
          Search Github Users
        </h1>
        <div className="flex flex-col gap-20 h-full w-full ">
          <Form />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default Searcher;
