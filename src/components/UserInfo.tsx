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

const renderStars = ({ rating }: RenderStarsProps) => {
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
    <div className="flex gap-2">
      <p className="font-semibold">{num}</p>
      <div className=" tracking-tight">{title}</div>
    </div>
  );
};

const UserRating = () => {
  const rating = useUserRating();

  return (
    <div className="flex gap-3 text-4xl text-[#fca311]">
      {renderStars({ rating })}
    </div>
  );
};

const UserDetailsCard = (data: UserData) => {
  const { avatar_url, name, bio, email, location, followers, public_repos } =
    data;

  return (
    <div
      data-testid="user-details-card"
      className=" flex max-md:flex-col justify-start text-lg
    max-w-4xl w-full bg-gray-50  rounded-xl mx-auto overflow-hidden"
    >
      <img
        src={avatar_url}
        className="object-cover w-full md:max-w-sm max-md:max-h-[300px] z-30 "
        alt="User Avatar"
      />

      <div className="flex flex-col gap-3 w-full font-light items-start justify-between text-xl p-4 md:p-10">
        <div className="flex flex-col gap-3 items-start">
          <UserRating />

          <p className=" text-4xl font-bold">{name ? name : "No Name."}</p>

          <p className="">{bio ? bio : "No bio."}</p>
          <div className="grid grid-cols-2 w-fit ">
            <UserNumbers num={followers} title="Followers" />
            <UserNumbers num={public_repos} title="Repositories" />
          </div>

          <div className="grid grid-cols-1 gap-3 items-start font-light pt-4 ">
            <div className="flex gap-3 items-center text-lg">
              <FaEnvelope />
              <p>{email ? email : "Not Available"}</p>
            </div>

            <div className="flex gap-3 items-center text-lg">
              <FaLocationPin />
              <p>{location ? location : "Not Available"}</p>
            </div>
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
      className="flex flex-col items-center justify-center max-w-4xl w-full h-full mx-auto min-h-[384px]
     bg-gray-50 border-2 rounded-3xl text-center gap-6"
    >
      <h1 className="text-5xl font-bold text-red-600">
        Failed to Retrieve User 😞
      </h1>
      <p className="text-xl font-medium text-gray-700 max-w-xl">
        Please double-check the username or try again later.
      </p>
      {error && (
        <div className="max-w-md text-xl font-normal text-red-600">
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
