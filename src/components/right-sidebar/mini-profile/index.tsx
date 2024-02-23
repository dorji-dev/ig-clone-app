import Link from "next/link";
import Image from "next/image";

function MiniProfile() {
  return (
    <div className="flex items-center">
      <Link href="/hello">
        <Image
          className="rounded-full overflow-hidden border p-[2px]"
          width={56}
          height={56}
          src="/images/default-user.png"
          alt="current user image"
        />
      </Link>
      <div className="ml-3">
        <Link href="/buddy" className="font-bold">
          @dorji-dev
        </Link>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-primary font-bold mt-2 block ml-auto">
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;
