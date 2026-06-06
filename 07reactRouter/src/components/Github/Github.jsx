// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hellosamyak")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <section className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src={data.avatar_url}
            alt="Git picture"
            className="h-72 w-72 rounded-4xl border border-white/10 object-cover shadow-xl shadow-black/20"
          />
        </div>
        <div className="space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
            GitHub profile
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Github followers: {data.followers}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            {data.name || data.login} is rendered directly from the loader data,
            with the same routing behavior and a cleaner presentation layer.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="text-sm text-slate-400">Repos</div>
              <div className="mt-1 text-2xl font-bold text-white">
                {data.public_repos}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="text-sm text-slate-400">Following</div>
              <div className="mt-1 text-2xl font-bold text-white">
                {data.following}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="text-sm text-slate-400">Followers</div>
              <div className="mt-1 text-2xl font-bold text-white">
                {data.followers}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/hellosamyak`);
  return response.json();
};
