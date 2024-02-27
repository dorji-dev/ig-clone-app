import ProfileLayoutLinkTabs from "@component/profile/link-tabs";
import LogoutButton from "@component/profile/logout-button";
import { ChildrenProp } from "@lib/models";
import { Link } from "@router/customized";
import { Button } from "antd";
import Image from "next/image";

const UserProfileLayout = ({ children }: ChildrenProp) => {
  return (
    <div className="pb-10">
      <div className="bg-white shadow-main_shadow">
        {/* profile meta-data */}
        <section className="flex py-5 md:py-10 px-5 justify-between sm:justify-center">
          <div className="mr-5 sm:mr-10">
            <div className="flex justify-center items-center flex-col sm:h-full">
              <div className="w-[80px] sm:w-[150px] pt-[100%] relative">
                {true ? (
                  <button className="rounded-full overflow-hidden h-full absolute inset-0">
                    <Image
                      className="object-cover rounded-full p-1 border border-solid border-gray-300 cursor-pointer"
                      width={150}
                      height={150}
                      style={{ width: "100%", height: "auto" }}
                      src="/images/default-user.png"
                      alt="avatar"
                    />
                  </button>
                ) : (
                  <Image
                    fill
                    className="w-full h-full object-cover rounded-full p-1 border border-solid border-gray-300 absolute inset-0"
                    src="/images/default-user.png"
                    alt="avatar"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="sm:ml-10 grow sm:grow-0 flex flex-col justify-between sm:py-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <h1 className="text-2xl sm:text-3xl mb-3 sm:mb-0 sm:mr-6 break-all">
                @dorji-dev
              </h1>
              {true ? (
                <div className="flex flex-col xs:flex-row">
                  <Button className="text-center py-1 px-3 font-[600] border border-solid border-gray-200 rounded-md mr-2">
                    Edit profile
                  </Button>
                  <LogoutButton />
                </div>
              ) : (
                <div>
                  <Button
                    className={`py-1 px-4 font-[600] ${
                      true ? "" : "bg-primary text-white border-primary"
                    } rounded-md border mr-2`}
                  >
                    {true ? "Following" : "Follow"}
                  </Button>
                  <Button className="py-1 px-4 font-[600] border border-solid border-gray-200 rounded-md">
                    Message
                  </Button>
                </div>
              )}
            </div>
            <div className="hidden sm:flex">
              <div className="mr-10">
                <span className="font-bold mr-1">230</span>
                <span className="text-gray-400">posts</span>
              </div>
              <Link className="mr-10" href="/">
                <span className="font-bold mr-1">12</span>
                <span className="text-gray-400">
                  {3 > 1 ? "follower" : "followers"}
                </span>
              </Link>
              <Link className="mr-10" href="/">
                <span className="font-bold mr-1">2</span>{" "}
                <span className="text-gray-400">following</span>
              </Link>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center">
                <p className="font-bold text-xl mb-1">Dorji Tshering</p>
                {true && (
                  <Button
                    danger
                    type="text"
                    className="ml-5 text-sm text-red-500"
                  >
                    Delete account
                  </Button>
                )}
              </div>
              <p>My Bio</p>
            </div>
          </div>
        </section>
        {/* mobile markups */}
        <div className="sm:hidden mb-5 px-4">
          <div className="flex items-center">
            <p className="font-bold text-lg mb-1">@dorji</p>
            {true && (
              <Button danger type="text" className="ml-5 text-sm text-red-500">
                Delete account
              </Button>
            )}
          </div>
          <p>Bio</p>
        </div>
        <section className="sm:hidden border-t py-4">
          <div className="flex text-center">
            <div className="w-[33.3%]">
              <span className="font-bold sm:mr-1 block">34</span>
              <span className="text-gray-400">posts</span>
            </div>
            <Link className="w-[33.3%]" href="/">
              <span className="font-bold sm:mr-1 block">90</span>
              <span className="text-gray-400">
                {9 <= 1 ? "follower" : "followers"}
              </span>
            </Link>
            <Link className="w-[33.3%]" href="/">
              <span className="font-bold sm:mr-1 block">90</span>{" "}
              <span className="text-gray-400">following</span>
            </Link>
          </div>
        </section>
        <ProfileLayoutLinkTabs />
      </div>
      <div className="bg-white shadow-main_shadow rounded-lg mx-2 md:mx-10 py-10 px-3 md:px-8 mt-7 mb-14 md:my-12">
        {children}
      </div>
    </div>
  );
};

export default UserProfileLayout;
