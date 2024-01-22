import { UserData } from "@api/requests/getUserData";
import { useUserData } from "@hooks/useUserData";
import { useUserRating } from "@hooks/useUserRating";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

type RenderStarsProps = {
  rating: number;
};

const UserStars = ({ rating }: RenderStarsProps) => {
  const stars = [];
  const numOfStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Fill the stars array with blank stars
  while (stars.length < numOfStars) {
    stars.push(<FaRegStar key={stars.length} className="star-icon" />);
  }

  // Replace the first star with a half star if needed
  if (hasHalfStar) {
    stars[0] = <FaStarHalfAlt key={stars.length} className="star-icon" />;
    return stars;
  }

  // Replace the stars array with full stars
  for (let i = 0; i < fullStars; i++) {
    stars[i] = <FaStar key={stars.length} className="star-icon" />;
  }

  return stars;
};

const UserNumbers = ({ num, title }: { num: number; title: string }) => {
  return (
    <div className="flex flex-col items-center   ">
      <div className="text-lg font-normal">{title}</div>
      <p className="font-semibold text-2xl">{num}</p>
    </div>
  );
};

const UserRating = () => {
  const rating = useUserRating();

  return (
    <div className="flex gap-4 text-4xl text-[#fca311]">
      {UserStars({ rating })}
    </div>
  );
};

const UserDetailsCard = (data: UserData) => {
  const {
    avatar_url,
    login,
    name,
    bio,
    email,
    location,
    followers,
    following,
    public_repos,
  } = data;

  return (
    <div
      data-testid="user-details-card"
      className=" flex max-md:flex-col justify-between text-lg border-2 p-8 w-full max-md:items-center
     max-w-3xl bg-gray-50  rounded-xl mx-auto overflow-hidden gap-6 md:gap-8"
    >
      <img
        src={avatar_url}
        className="object-cover w-36 h-36 rounded-full "
        alt="User Avatar"
      />

      <div className="flex flex-col gap-6 w-fit font-light items-start justify-between text-xl mx-auto max-w-lg   max-md:items-center  max-md:justify-center">
        <div className="flex flex-col gap-2 max-md:items-center max-md:text-center">
          <UserRating />
          <div className="">
            <p className=" text-4xl font-bold">{name ? name : "No Name."}</p>{" "}
            <p className=" text-lg text-blue-500 font-medium ">
              @{login ? login : "No User."}
            </p>
          </div>
          <span className="text-gray-700 ">{bio ? bio : "No bio."}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 w-full rounded-xl bg-gray-100 p-4 border gap-4">
          <UserNumbers num={followers} title="Followers" />
          <UserNumbers num={following} title="Following" />
          <UserNumbers num={public_repos} title="Repos" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:w-full gap-3 items-center justify-center font-light   ">
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
    </div>
  );
};

const ErrorCard = () => {
  const { error } = useUserData();

  return (
    <div
      data-testid="error-card"
      className="flex flex-col items-center justify-center max-w-3xl w-full h-full mx-auto min-h-[384px] bg-gray-50 border-2 rounded-3xl text-center gap-6 p-8"
    >
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        Failed to Retrieve User 😞
      </h1>
      <p className="text-xl font-medium text-gray-700 max-w-md">
        We apologize for the inconvenience. Please double-check the username or
        try again later.
      </p>
      {error && (
        <div className="max-w-md text-xl font-normal text-red-600 mt-4">
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

const LoadingIndicator = () => {
  return (
    <div className="mx-auto  min-h-[384px]" data-testid="loading-indicator">
      <CircularProgress />
    </div>
  );
};

function UserInfo() {
  const { data, isError, isPending } = useUserData();

  if (isError) return <ErrorCard />;
  if (isPending) return <LoadingIndicator />;
  if (data) return <UserDetailsCard {...data} />;

  return <></>;
}

export default UserInfo;
