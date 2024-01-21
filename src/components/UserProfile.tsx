import { useUserContext } from "../hooks/useUserContext";
import Stars from "./Stars";
import CircularProgress from "@mui/material/CircularProgress";
import { FaLocationPin } from "react-icons/fa6";
import { UserData } from "../api/requests/getUserData";
import { FaEnvelope } from "react-icons/fa";

const UserInfo = ({ info, title }: { info: number; title: string }) => {
  return (
    <div className="flex items-start font-normal text-xl gap-1 transition-all">
      <p className="font-medium">{info}</p>
      <div>{title}</div>
    </div>
  );
};

const UserDetailsCard = (data: UserData) => {
  const {
    avatar_url,
    name,
    bio,
    email,
    location,
    followers,
    following,
    public_repos,
  } = data;

  return (
    <div className="flex max-lg:flex-col justify-start text-lg max-lg:max-w-xl max-w-4xl w-full bg-gray-50 rounded-md mx-auto overflow-hidden">
      <img
        src={avatar_url}
        className="object-cover w-full lg:max-w-xs max-lg:max-h-[250px] z-30"
        alt="User Avatar"
      />

      <div className="flex flex-col gap-4 w-full font-light items-start justify-start text-xl p-8">
        <Stars />
        <div className="flex gap-2 items-center text-4xl font-bold">
          <p>{name ? name : "No Name."}</p>
        </div>
        <div className="flex max-lg:flex-col gap-4">
          <UserInfo info={followers} title="followers" />
          <UserInfo info={following} title="following" />
          <UserInfo info={public_repos} title="repositories" />
        </div>
        <div className="flex gap-2 items-center">
          <p>{bio ? bio : "No bio."}</p>
        </div>

        <div className="flex gap-2 items-center text-lg">
          <FaEnvelope />
          <p>{email ? email : "Not Available"}</p>
        </div>

        <div className="flex gap-2 items-center text-lg">
          <FaLocationPin />
          <p>{location ? location : "Not Available"}</p>
        </div>
      </div>
    </div>
  );
};

const ErrorCard = () => {
  const { error } = useUserContext();

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl w-full h-full mx-auto p-8 bg-gray-50 border-2 rounded-3xl text-center gap-2">
      <span className="text-5xl mb-2">😞</span>
      <h1 className="text-3xl font-bold text-red-600">
        Failed to Retrieve User
      </h1>
      <p className="text-lg font-medium text-gray-700 max-w-xs">
        Please double-check the username or try again later.
      </p>
      {error && (
        <div className="max-w-xs text-lg font-thin text-red-600">
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

function UserProfile() {
  const { data, isError, isPending } = useUserContext();

  if (isPending) {
    return (
      <div className="mx-auto">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <ErrorCard />;
  }

  if (data) {
    return <UserDetailsCard {...data} />;
  }

  return <></>;
}

export default UserProfile;
