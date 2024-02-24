import { Link } from "@router/customized";
import React from "react";
import Image from "next/image";

const Suggestions = () => {
  const suggestions = [
    {
      id: "234653465",
      image: "/images/default-user.png",
      username: "@dorji",
    },
    {
      id: "3456463",
      image: "/images/default-user.png",
      username: "@sangay",
    },
    {
      id: "34563wer456",
      image: "/images/default-user.png",
      username: "@tshering",
    },
    {
      id: "3444563456",
      image: "/images/default-user.png",
      username: "@nima",
    },
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between mb-5">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        {/* <button className='text-gray-600 font-semibold'>See All</button> */}
      </div>
      {suggestions.length > 0 ? (
        suggestions.map((user) => (
          <div key={user.id} className="flex items-center justify-between mt-3">
            <Link href="/hello">
              <Image
                className="object-cover rounded-full border p-[2px]"
                width={40}
                height={40}
                src={user.image}
                alt="user image"
              />
            </Link>
            <div className="flex-1 ml-4">
              <Link href="/hello" className="font-semibold">
                {user.username}
              </Link>
            </div>
            <button className="text-primary font-bold">Follow</button>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No suggestions to show for now</p>
      )}
    </div>
  );
};

export default Suggestions;
